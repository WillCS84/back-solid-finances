import { FastifyReply } from "fastify"
import { categoryController } from "../../useCases/CategoryUseCases"
import { ICategoryRequestDTO } from "../../useCases/CategoryUseCases/CategoryDTO"

export async function listCategories(request, reply: FastifyReply) {
  return categoryController.read(reply)
}

export async function createCategory(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.create(request, reply)
}

export async function findById(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.findById(request, reply)
}
