export interface IExtractRequestDTO {
  id_extrato?: string
  descricao: string
  data_lancamento: Date
  valor: number
  tipo: string
  id_categoria: string
}
