import { useState } from "react";
import Pagination from "../shared/pagination";
import { IClienteList } from "./cliente-interfaces";
import ClienteListItem from "./cliente-table-item";

interface ClienteListProps {
    clientes: IClienteList | null,
    paginaAtual: number,
    onPageChange: any,
    onDataChange: any
}

const ClienteTable = ({ clientes, paginaAtual, onPageChange, onDataChange }: ClienteListProps) => {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState<number>(paginaAtual);

    function localPageChange(page: number) {
        setCurrentPage(page);
        onPageChange(page);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-sm table-zebra">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes?.data && clientes.data.map((cliente) => (
                        <ClienteListItem
                            key={cliente.id}
                            cliente={cliente}
                            onDataChange={onDataChange}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={clientes?.count ?? 0}
                pageSize={pageSize}
                siblingCount={1}
                onPageChange={(page: number) => { localPageChange(page); }}
            />
        </div>
    )
}

export default ClienteTable;