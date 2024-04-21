import { PostgresExtractRepository } from "../../repositories/implementations/PostgresExtractRepository"
import { ExtractCase } from "./ExtractCase"
import { ExtractController } from "./ExtractController"

const postgresExtractRepository = new PostgresExtractRepository()

const extractCase = new ExtractCase(postgresExtractRepository)

const extractController = new ExtractController(extractCase)

export { extractController }
