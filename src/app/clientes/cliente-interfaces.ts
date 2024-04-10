export interface ICliente {
    id: number,
    codigo: string,
    nome: string
}

export interface IClienteList {
    data: ICliente[],
    count: number
}