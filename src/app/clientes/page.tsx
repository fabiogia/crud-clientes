'use client'

import { getClientes } from "./cliente-api";
import ClienteAdd from "./cliente-add";
import ClienteTable from "./cliente-table";
import MenuSide from "../shared/menu-side-v2";
import { ICliente, IClienteList } from "./cliente-interfaces";
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseBrowserClient } from "../../../data/repositories/supabase/supabase.browser.client";
import { useEffect, useState } from "react";

const pageSize = 10;

function updateQueryString(qry: string) { // 'pag=1')
  window.history.replaceState(history.state, "", `?${qry}`)
}

export default function ClienteIndex() {
  let pagSalva = 1;
  if (typeof window !== 'undefined') {
    pagSalva = parseInt(localStorage.getItem('pag-clientes') ?? '1', 10);
  }
  const [clientes, setClientes] = useState<IClienteList | null>(null);
  const [pagina, setPagina] = useState(pagSalva)
  const [dataRefresh, setDataRefresh] = useState('')

  useEffect(() => {
    localStorage.setItem('pag-clientes', `${pagina}`)

    getClientes(pagina, pageSize).then((v) => { setClientes(v) })
  }, [pagina, dataRefresh])

  function forceRefresh() {
    setDataRefresh((new Date()).toString());
  }

  return (<>
    <main className="max-w-4xl ml-[20rem] mt-4 bg-gray-100 rounded-lg p-4 shadow-md">
      <div className="mty-5 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Cadastro de Clientes</h1>
        <ClienteAdd
          onDataChange={() => { forceRefresh(); }}
        />
      </div>
      <ClienteTable
        clientes={clientes}
        paginaAtual={pagina}
        onPageChange={(page: number) => { setPagina(page); }}
        onDataChange={() => { forceRefresh(); }}
      />
    </main>
  </>
  );
}
