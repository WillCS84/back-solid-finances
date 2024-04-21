import { FastifyReply } from "fastify"
import { extractController } from "../../useCases/CreateExtract.ts"
import { IExtractRequestDTO } from "../../useCases/CreateExtract.ts/ExtractDTO"

export async function createExtract(request: { body: IExtractRequestDTO }, reply: FastifyReply) {
  return extractController.create(request, reply)
}
