import { prisma } from "../../database"
import { Category } from "../../entities/Category"
import { ICategoryRequestDTO } from "../../useCases/CategoryUseCases/CategoryDTO"
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

  async findByDescription(description: string): Promise<Category> {
    try {
      return await prisma.categoria.findFirst({
        where: {
          descricao: description
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

  async update(id_categoria: string, fields: ICategoryRequestDTO): Promise<Category> {
    try {
      if (!id_categoria)
        throw {
          message: "O id da categoria é necessário!"
        }

      let categoryDescription = await prisma.categoria.findFirst({
        where: {
          descricao: {
            contains: fields.descricao,
            mode: "insensitive"
          }
        }
      })

      if (categoryDescription)
        throw {
          message: "Já existe categoria com essa descrição!"
        }

      let categoryId = await prisma.categoria.findFirst({
        where: {
          id_categoria: id_categoria
        }
      })

      if (!categoryId) {
        throw {
          message: "Categoria não encontrada!"
        }
      }

      const update = await prisma.categoria.updateMany({
        data: fields,
        where: {
          id_categoria: id_categoria
        }
      })

      if (update.count > 0) {
        return await prisma.categoria.findUnique({
          where: {
            id_categoria: id_categoria
          }
        })
      } else {
        throw {
          message: "Não foi possível atualizar a categoria!"
        }
      }
    } catch (error) {
      throw error
    }
  }

  async deleteById(id_categoria: string): Promise<void> {
    try {
      if (!id_categoria)
        throw {
          message: "O id da categoria é necessário!"
        }

      const extratos = await prisma.extrato.findMany({
        where: {
          id_categoria: id_categoria
        }
      })

      if (extratos.length > 0)
        throw {
          message: 'Existem dados vinculados a esta categoria"'
        }

      await prisma.categoria.delete({
        where: {
          id_categoria: id_categoria
        }
      })
    } catch (error) {
      throw error
    }
  }
}
