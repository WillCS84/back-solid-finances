import { connect } from "http2"
import { uuid } from "uuidv4"

export class Extract {
  public readonly id_extrato: string

  public descricao: string
  public valor: number
  public data_lancamento: Date
  public id_categoria: string
  public tipo: string

  constructor(props: Omit<Extract, "id_extrato">, id_extrato?: string) {
    Object.assign(this, props)

    if (!id_extrato) {
      this.id_extrato = uuid()
    }
  }
}
