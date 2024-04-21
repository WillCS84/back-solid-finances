import { Extract } from "../entities/Extract"

export interface IExtractRepository {
  save(extrato: Extract): Promise<void>
}
