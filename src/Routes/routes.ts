import { FastifyInstance } from "fastify"
import { ICategoryRequestDTO } from "../useCases/CategoryUseCases/CategoryDTO"
import { createCategory, findById, listCategories } from "./Category/CategoryRoutes"
import { IExtractRequestDTO } from "../useCases/CreateExtract.ts/ExtractDTO"
import { createExtract } from "./Extract/ExtractRoutes"

async function routes(fastify: FastifyInstance) {
  fastify.post<{ Body: IExtractRequestDTO }>("/extract", createExtract)

  fastify.post<{ Body: ICategoryRequestDTO }>("/category", createCategory)
  fastify.get("/category", listCategories)
  fastify.post<{ Body: ICategoryRequestDTO }>("/category/findById", findById)
}

export { routes }
