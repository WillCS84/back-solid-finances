import { prisma } from "../../database"
import { Category } from "../../entities/Category"
import { ICategoryRepository } from "../ICategoryRepository"

export class PostgresCategoryReposity implements ICategoryRepository {
  async findByAll(): Promise<Category[]> {
    return await prisma.categoria.findMany()
  }

  async findById(id_categoria: string): Promise<Category> {
    try {
      if (!id_categoria) {
        throw {
          error: true,
          message: "Id da categoria é necessário"
        }
      }
      return await prisma.categoria.findUnique({
        where: {
          id_categoria: id_categoria
        }
      })
    } catch (error) {
      throw error
    }
  }

  async save(category: Category): Promise<void> {
    try {
      const categories = await prisma.categoria.findFirst({
        where: {
          descricao: {
            contains: category.descricao,
            mode: "insensitive"
          }
        }
      })

      if (categories) {
        throw {
          message: "Já existe uma categoria com essa descrição"
        }
      }

      await prisma.categoria.create({
        data: category
      })
    } catch (error) {
      throw error
    }
  }
}
