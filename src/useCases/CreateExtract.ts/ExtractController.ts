import { FastifyReply } from "fastify"
import { ExtractCase } from "./ExtractCase"
import { IExtractRequestDTO } from "./ExtractDTO"

export class ExtractController {
  constructor(private extractController: ExtractCase) {}

  async create(request: { body: IExtractRequestDTO }, reply: FastifyReply) {
    const { descricao, valor, tipo, data_lancamento, id_categoria } = request.body

    try {
      await this.extractController.create({
        data_lancamento,
        descricao,
        id_categoria,
        tipo,
        valor
      })

      return reply.code(200).send({ error: false, message: "Extrato criado com sucesso"! })
    } catch (error) {
      return reply.code(401).send({ error: true, motive: error.error, message: error.message })
    }
  }
}
