import { Category } from "../entities/Category"
import { ICategoryRequestDTO } from "../useCases/CategoryUseCases/CategoryDTO"

export interface ICategoryRepository {
  findById(id_categoria: string): Promise<Category>
  findByDescription(description: string): Promise<Category>
  findByAll(): Promise<Category[]>
  save(category: Category): Promise<void>
  update(id_categoria: string, categories: ICategoryRequestDTO): Promise<Category>
  deleteById(id_categoria: string): Promise<void>
}
