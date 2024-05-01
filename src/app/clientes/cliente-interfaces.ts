export interface ICliente {
    id: number,
    codigo: string,
    nome: string,
    fone: string
}

export interface IClienteList {
    data: ICliente[],
    count: number
}