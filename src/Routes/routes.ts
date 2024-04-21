import { FastifyInstance } from "fastify"
import { ICategoryRequestDTO } from "../useCases/CategoryUseCases/CategoryDTO"
import {
  createCategory,
  deleteById,
  findByDescription,
  findById,
  listCategories,
  update
} from "./Category/CategoryRoutes"
import { IExtractRequestDTO } from "../useCases/CreateExtract.ts/ExtractDTO"
import { createExtract } from "./Extract/ExtractRoutes"

async function routes(fastify: FastifyInstance) {
  fastify.post<{ Body: IExtractRequestDTO }>("/extract", createExtract)

  fastify.post<{ Body: ICategoryRequestDTO }>("/category", createCategory)
  fastify.get("/category", listCategories)
  fastify.post<{ Body: ICategoryRequestDTO }>("/category/findById", findById)
  fastify.put<{ Body: ICategoryRequestDTO }>("/category", update)
  fastify.delete<{ Body: ICategoryRequestDTO }>("/category", deleteById)
  fastify.post<{ Body: ICategoryRequestDTO }>("/category/findByDescription", findByDescription)
}

export { routes }
