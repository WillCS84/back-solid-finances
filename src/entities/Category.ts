import { v4 as uuidv4 } from "uuid"

export class Category {
  public readonly id_categoria: string

  public descricao: string

  constructor(props: Omit<Category, "id_categoria">, id_categoria?: string) {
    Object.assign(this, props)

    if (!id_categoria) {
      this.id_categoria = uuidv4()
    }
  }
}
