import { FastifyReply, FastifyRequest } from "fastify"
import { categoryController } from "../../useCases/CategoryUseCases"
import { ICategoryRequestDTO } from "../../useCases/CategoryUseCases/CategoryDTO"

export async function listCategories(request: any, reply: FastifyReply) {
  return categoryController.read(reply)
}

export async function createCategory(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.create(request, reply)
}

export async function findById(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.findById(request, reply)
}

export async function update(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.update(request, reply)
}

export async function deleteById(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.deleteById(request, reply)
}

export async function findByDescription(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
  return categoryController.findByDescription(request, reply)
}
