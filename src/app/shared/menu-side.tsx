'use client'

import { useEffect, useRef } from "react";
import { FiAperture, FiBookmark, FiChevronDown, FiChevronUp, FiHome, FiLogOut, FiMessageSquare, FiSearch, FiUser } from "react-icons/fi";


export default function MenuSide() {

    const openSidebar = () => {
        console.log('openSidebar');
        document.querySelector(".sidebar")?.classList.toggle("hidden");
    }

    const dropdown = (idSubmenu: string, idArrow: string) => {
        console.log('dropdown');
        document.querySelector(idSubmenu)?.classList.toggle("hidden");
        document.querySelector(idArrow)?.classList.toggle("rotate-0");
    }

    const iniciarDropDowns = () => {
        console.log('iniciarDropDowns')

        console.log(document.querySelector(".arrow"))
        console.log(document.querySelector(".submenu"))
        document.querySelector(".arrow")?.classList.toggle("rotate-0");
        document.querySelector(".submenu")?.classList.toggle("hidden");
    }

    const initialized = useRef(false)

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            //iniciarDropDowns();
        }
    }, [])

    return (<>
        <span
            className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
            onClick={() => openSidebar()}
        >
            <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div
            className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 prevent-select"
        >
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                    <div className="px-2 py-2 rounded-md bg-blue-600">
                        <FiAperture />
                    </div>
                    <h1 className="font-bold text-gray-200 text-[15px] ml-3">Manager</h1>
                    <i
                        className="bi bi-x cursor-pointer ml-28 lg:hidden"
                        onClick={() => openSidebar()}
                    ></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div
                className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
            >
                <FiSearch />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
            </div>

            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <FiHome />
                <span className="text-[15px] ml-4 text-gray-200 font-bold"><a href="/">Home</a></span>
            </div>

            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={() => dropdown('#submenu1', '#arrow1')}
            >
                <FiBookmark />
                <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Cadastros</span>
                    <span className="text-sm rotate-180 arrow" id="arrow1">
                        <FiChevronUp />
                    </span>
                </div>
            </div>
            <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold submenu hidden"
                id="submenu1"
            >
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiUser className="inline-block" />
                    <span className="ml-2"><a href="/clientes">Clientes</a></span>
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiBookmark className="inline-block" />
                    <span className="ml-2">Exemplo</span>
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiBookmark className="inline-block" />
                    <span className="ml-2">Exemplo</span>
                </h1>
            </div>

            <div className="my-4 bg-gray-600 h-[1px]"></div>

            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={() => dropdown('#submenu2', '#arrow2')}
            >
                <FiMessageSquare />
                <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Exemplo</span>
                    <span className="text-sm rotate-180 arrow" id="arrow2">
                        <FiChevronUp />
                    </span>
                </div>
            </div>
            <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold submenu hidden"
                id="submenu2"
            >
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiMessageSquare className="inline-block" />
                    <span className="ml-2">Exemplo</span>
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiMessageSquare className="inline-block" />
                    <span className="ml-2">Exemplo</span>
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    <FiMessageSquare className="inline-block" />
                    <span className="ml-2">Exemplo</span>
                </h1>
            </div>
            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <FiLogOut />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </div>
    </>)
}