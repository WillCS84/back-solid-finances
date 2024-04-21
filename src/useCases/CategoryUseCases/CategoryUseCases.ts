import { Category } from "../../entities/Category"
import { ICategoryRepository } from "../../repositories/ICategoryRepository"
import { ICategoryRequestDTO } from "./CategoryDTO"

export class CategoryUseCases {
  constructor(private categoryRepository: ICategoryRepository) {}

  async create(data: ICategoryRequestDTO) {
    const category = new Category(data)

    await this.categoryRepository.save(category)
  }

  async read() {
    return await this.categoryRepository.findByAll()
  }

  async findById(id_categoria: string) {
    return await this.categoryRepository.findById(id_categoria)
  }
}
