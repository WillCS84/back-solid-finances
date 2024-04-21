import { Category } from "../entities/Category"

export interface ICategoryRepository {
  findById(id_categoria: string): Promise<Category>
  findByAll(): Promise<Category[]>
  save(extrato: Category): Promise<void>
}
