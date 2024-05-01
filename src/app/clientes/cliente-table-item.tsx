'use client'

import { deleteCliente, editCliente } from "./cliente-api";
import { ICliente } from "./cliente-interfaces";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import Modal from "../shared/modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import IMask from 'imask';
import { v4 as uuidv4 } from "uuid";

interface ClienteListItemProps {
    cliente: ICliente,
    onDataChange: any
}

const ClienteListItem = ({ cliente, onDataChange }: ClienteListItemProps) => {
    const [idInputFone] = useState(uuidv4())
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [openModalView, setOpenModalView] = useState<boolean>(false);
    const [clienteEdit, setClienteEdit] = useState<ICliente>(cliente);

    const handleSubmitEditCliente: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editCliente(clienteEdit);
        setOpenModalEdit(false);
        //window.location.reload()
        onDataChange();
    };

    const handleDeleteCliente = async (id: number) => {
        await deleteCliente(id);
        setOpenModalDeleted(false);
        //window.location.reload()
        onDataChange();
    };

    const handleCancelarEdit: FormEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        setClienteEdit(cliente);
        setOpenModalEdit(false);
    };

    const localOpenModalEdit = (open: boolean) => {
        console.log(document.getElementById(idInputFone))
        IMask(
            (document.getElementById(idInputFone) as any),
            {
                mask: '(00) 00000-0000'
            }
        )
        setOpenModalEdit(open);
    }

    // useEffect(() => {
    //     console.log(clienteEdit.codigo)
    //     IMask(
    //         (document.getElementById('fone') as any),
    //         {
    //             mask: '(00) 00000-0000'
    //         }
    //     )
    // }, [])

    return (<tr key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.codigo}</td>
        <th className='w-full'><a href="#"
            className="no-underline hover:underline"
            onClick={() => { setOpenModalView(true) }}>
            {cliente.nome}</a>
        </th>
        <td className='whitespace-nowrap'>{cliente.fone}</td>
        <td className='flex gap-5'>
            <FiEdit
                onClick={() => localOpenModalEdit(true)}
                cursor='pointer'
                className='text-blue-500'
                size={25}
            />

            <Modal modalOpen={openModalView} setModalOpen={setOpenModalView}>
                <div>
                    <h3 className='font-bold text-lg modal-top'>Cadastro do cliente</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id:</th><td>{clienteEdit.id}</td>
                            </tr>
                            <tr>
                                <th>Código:</th><td>{clienteEdit.codigo}</td>
                            </tr>
                            <tr>
                                <th>Nome:</th><td>{clienteEdit.nome}</td>
                            </tr>
                            <tr>
                                <th>Telefone:</th><td>{clienteEdit.fone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>

            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                <form onSubmit={handleSubmitEditCliente}>
                    <h3 className='font-bold text-lg modal-top'>Editar cliente</h3>
                    <div className='modal-middle'>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="field">
                                <label htmlFor="codigo">Código</label>
                                <input
                                    value={clienteEdit.codigo || ''}
                                    onChange={(e) => setClienteEdit({ ...clienteEdit, codigo: e.target.value })}
                                    type='text'
                                    autoFocus
                                    className='input input-bordered w-full'
                                />
                            </div>
                            <div className="col-span-3 field">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    value={clienteEdit.nome || ''}
                                    onChange={(e) => setClienteEdit({ ...clienteEdit, nome: e.target.value })}
                                    type='text'
                                    className='input input-bordered w-full'
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="nome">Telefone</label>
                            <input
                                id={idInputFone}
                                value={clienteEdit.fone || ''}
                                onChange={(e) => setClienteEdit({ ...clienteEdit, fone: e.target.value })}
                                type='text'
                                className='input input-bordered w-full'
                            />
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