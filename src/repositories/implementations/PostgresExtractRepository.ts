import { prisma } from "../../database"
import { Extract } from "../../entities/Extract"
import { IExtractRepository } from "../IExtractRepository"

export class PostgresExtractRepository implements IExtractRepository {
  async save(extrato: Extract): Promise<void> {
    const data = {
      id_extrato: extrato.id_extrato,
      descricao: extrato.descricao,
      data_lancamento: new Date(extrato.data_lancamento),
      tipo: extrato.tipo,
      valor: extrato.valor,
      categoria: {
        connect: {
          id_categoria: extrato.id_categoria
        }
      }
    }

    try {
      await prisma.extrato.create({ data: data })
    } catch (error) {
      throw error
    }
  }
}
