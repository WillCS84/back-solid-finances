import { PostgresCategoryReposity } from "../../repositories/implementations/PostgresCategoryRepository"
import { CategoryController } from "./CategoryController"
import { CategoryUseCases } from "./CategoryUseCases"

const postgresCategoryRepository = new PostgresCategoryReposity()

const categoryCase = new CategoryUseCases(postgresCategoryRepository)

const categoryController = new CategoryController(categoryCase)

export { categoryController }
