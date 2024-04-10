export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
    public: {
        Tables: {
            clientes: {
                Row: {
                    // the data expected from .select()
                    id: number
                    codigo: string
                    pessoa: string | null
                    nome: string | null
                    ende: string | null
                    setor: string | null
                    cidade: string | null
                    uf: string | null
                    cep: string | null
                    cpf: string | null
                }
                Insert: {
                    // the data to be passed to .insert()
                    id?: never // generated columns must not be supplied
                    codigo: string // `not null` columns with no default must be supplied
                    // nullable columns can be omitted
                }
                Update: {
                    // the data to be passed to .update()
                    id?: never
                    codigo: string // `not null` columns are optional on .update()
                }
            }
        }
    }
}