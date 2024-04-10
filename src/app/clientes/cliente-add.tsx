'use client'

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../shared/modal";
import { addCliente } from "./cliente-api";
import { FiPlusCircle, FiUserPlus } from "react-icons/fi";
import { ICliente } from "./cliente-interfaces";

interface ClienteAddProps {
    // count: number
    onDataChange: any
}

const ClienteAdd = ({ onDataChange }: ClienteAddProps) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [clienteEdit, setClienteEdit] = useState<ICliente>({} as ICliente);

    const handleSubmitNew: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addCliente(clienteEdit);
        setClienteEdit({} as ICliente);
        setModalOpen(false);
        // router.refresh();
        onDataChange();
    };

    const handleCancelar: FormEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        setClienteEdit({} as ICliente);
        setModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className='btn bg-white border-solid border-2 border-gray-300'
            >
                <FiUserPlus className='ml-2 text-blue-500' cursor='pointer' size={25} /> Incluir
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNew}>
                    <h3 className='font-bold text-lg'>Incluir novo cliente</h3>
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
                        <button onClick={handleCancelar} className='btn btn-ghost'>
                            Cancelar
                        </button>
                        <button type='submit' className='btn btn-primary'>
                            Incluir
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default ClienteAdd;

function uuidv4(): string | (() => string) {
    throw new Error("Function not implemented.");
}
