'use client'

//import { useRouter } from "next/navigation";
import { deleteCliente, editCliente } from "./cliente-api";
import { ICliente } from "./cliente-interfaces";
import { FormEventHandler, useState } from "react";
import Modal from "../shared/modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface ClienteListItemProps {
    cliente: ICliente,
    onDataChange: any
}

const ClienteListItem = ({ cliente, onDataChange }: ClienteListItemProps) => {
    //const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [clienteEdit, setClienteEdit] = useState<ICliente>(cliente);

    const handleSubmitEditCliente: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editCliente(clienteEdit);
        setOpenModalEdit(false);
        //router.refresh();
        //window.location.reload()
        onDataChange();
    };

    const handleDeleteCliente = async (id: number) => {
        await deleteCliente(id);
        setOpenModalDeleted(false);
        //router.refresh();
        window.location.reload()
    };

    const handleCancelarEdit: FormEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        setClienteEdit(cliente);
        setOpenModalEdit(false);
    };

    return (<tr key={cliente.id}>
        <td>{cliente.id}</td>
        <th className='w-full'>{cliente.nome}</th>
        <td className='flex gap-5'>
            <FiEdit
                onClick={() => setOpenModalEdit(true)}
                cursor='pointer'
                className='text-blue-500'
                size={25}
            />
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                <form onSubmit={handleSubmitEditCliente}>
                    <h3 className='font-bold text-lg modal-top'>Editar cliente</h3>
                    <div className='modal-middle'>
                        <div className="formgrid grid">
                            <div className="col-3 field">
                                <label htmlFor="codigo">Código</label>
                                <input
                                    value={clienteEdit.codigo}
                                    onChange={(e) => setClienteEdit({ ...clienteEdit, codigo: e.target.value })}
                                    type='text'
                                    autoFocus
                                    className='input input-bordered w-full'
                                />
                            </div>
                            <div className="col-9 field">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    value={clienteEdit.nome}
                                    onChange={(e) => setClienteEdit({ ...clienteEdit, nome: e.target.value })}
                                    type='text'
                                    className='input input-bordered w-full'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='modal-action'>
                        <button onClick={handleCancelarEdit} className='btn btn-ghost'>
                            Cancelar
                        </button>
                        <button type='submit' className='btn btn-primary'>
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal>
            <FiTrash2
                onClick={() => setOpenModalDeleted(true)}
                cursor='pointer'
                className='text-red-500'
                size={25}
            />
            <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                <h3 className='text-lg'>
                    Confirma a exclusão deste cliente?
                </h3>
                <p className="mt-2">Nome: {cliente.nome}</p>
                <div className='modal-action'>
                    <button onClick={() => setOpenModalDeleted(false)} className='btn btn-ghost'>
                        Não
                    </button>
                    <button onClick={() => handleDeleteCliente(cliente.id)} className='btn btn-primary'>
                        Sim
                    </button>
                </div>
            </Modal>
        </td>
    </tr>);
}

export default ClienteListItem;