import { FastifyReply, FastifyRequest } from "fastify"
import { CategoryUseCases } from "./CategoryUseCases"
import { ICategoryRequestDTO } from "./CategoryDTO"

export class CategoryController {
  constructor(private createCategoryController: CategoryUseCases) {}

  async create(request: { body: ICategoryRequestDTO }, reply: FastifyReply): Promise<FastifyReply> {
    const { descricao } = request.body
    try {
      await this.createCategoryController.create({
        descricao
      })

      return reply.code(200).send({ error: false, message: "Categoria criada com sucesso!" })
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }

  async read(reply: FastifyReply) {
    try {
      return await this.createCategoryController.read()
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }

  async findById(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
    try {
      const { id_categoria } = request.body

      return await this.createCategoryController.findById(id_categoria)
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }

  async findByDescription(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
    try {
      const { descricao } = request.body

      return await this.createCategoryController.findByDescription(descricao)
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }

  async update(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
    try {
      const fields = request.body

      return await this.createCategoryController.update(fields.id_categoria, fields)
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }

  async deleteById(request: { body: ICategoryRequestDTO }, reply: FastifyReply) {
    try {
      const { id_categoria } = request.body

      return await this.createCategoryController.deleteById(id_categoria)
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }
}
