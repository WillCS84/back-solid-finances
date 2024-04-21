import fastify, { FastifyInstance } from "fastify"
import { routes } from "./Routes/routes"

require("dotenv/config")

const app: FastifyInstance = fastify()
const PORT = Number(process.env.PORT)

app.register(routes)

app.listen({ port: PORT }).then(() => {
  console.log(`HTTP server running on port ${PORT}`)
})
