'use client'

import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { ICliente, IClienteList } from '@/app/clientes/cliente-interfaces';
import { v4 as uuidv4 } from "uuid";
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseBrowserClient } from '../../../data/repositories/supabase/supabase.browser.client';

const baseUrl = 'http://localhost:3001';

var _criarSupabase = (): SupabaseClient<any, "public", any> => {
    const supabase: SupabaseClient<any, "public", any> = supabaseBrowserClient();
    return supabase;
}

export async function getClientes(pagina: number, linhasPorPagina: number): Promise<IClienteList> {
    // const rest = await fetch(`${baseUrl}/clientes`, {
    //     cache: 'no-store'
    // });
    // const clientes = await rest.json();
    // return clientes;

    const rangeIni = (pagina - 1) * linhasPorPagina;
    const rangeFim = rangeIni + (linhasPorPagina - 1);
    const supabase: SupabaseClient<any, "public", any> = supabaseBrowserClient();
    const { data, count } = await supabase.from("clientes")
        .select("id, codigo, nome", { count: 'exact' }) // pessoa, ende, setor, cidade, uf, cpf, cep")
        .range(rangeIni, rangeFim)
        .order("id");

    let retorno: IClienteList = { data: data as ICliente[], count: count ?? 0 }

    return retorno;
}

export const addCliente = async (cliente: ICliente): Promise<void> => {
    // //    cliente.id = uuidv4();
    // const res = await fetch(`${baseUrl}/clientes`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(cliente)
    // })
    // const newCliente = await res.json();
    // return newCliente;

    // const { data, error } = 
    await _criarSupabase().from("clientes").insert(cliente);
}

export const editCliente = async (cliente: ICliente): Promise<void> => {
    let clienteEd = { codigo: cliente.codigo, nome: cliente.nome }
    await _criarSupabase().from("clientes").update(clienteEd).eq('id', cliente.id);

    // const res = await fetch(`${baseUrl}/clientes/${cliente.id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(cliente)
    // })
    // const updatedCliente = await res.json();
    // return updatedCliente;
}

export const deleteCliente = async (id: number): Promise<void> => {
    // await fetch(`${baseUrl}/clientes/${id}`, {
    //     method: 'DELETE',
    // })

    await _criarSupabase().from("clientes").delete().eq('id', id);
}