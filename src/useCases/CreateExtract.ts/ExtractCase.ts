import { Extract } from "../../entities/Extract"
import { IExtractRepository } from "../../repositories/IExtractRepository"
import { IExtractRequestDTO } from "./ExtractDTO"

export class ExtractCase {
  constructor(private extractRepository: IExtractRepository) {}

  async create(data: IExtractRequestDTO) {
    const extract = new Extract(data)

    await this.extractRepository.save(extract)
  }
}
