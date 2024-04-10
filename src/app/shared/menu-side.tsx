'use client'

import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiUser, FiX } from "react-icons/fi";

export default function MenuSide() {
    const [sidebarOpened, setSidebarOpened] = useState(false)

    function menuToggle(e: any) {
        e.preventDefault();

        const navbar = document.getElementById("navbar");
        const sidebar = document.getElementById("sidebar");
        const btnSidebarToggler = document.getElementById("btnSidebarToggler");
        const navClosed = document.getElementById("navClosed");
        const navOpen = document.getElementById("navOpen");

        sidebar!.classList.toggle("show");
        setSidebarOpened(!sidebarOpened)

        sidebar!.style.top = navbar!.clientHeight - 1 + "px";
    }

    function openCloseOption(elementId: string) {
        var collapseEl = document.getElementById(elementId) as any;
        collapseEl.classList.toggle('hidden');
    }


    const telaAtual = localStorage.getItem('tela-atual') ?? '';

    return (<>
        {/* Navbar start */}
        <nav id="navbar" className="fixed top-0 z-40 flex w-full flex-row bg-gray-800 px-4 h-16">
            <button id="btnSidebarToggler" type="button" className="py-4 text-2xl text-white hover:text-gray-200"
                onClick={menuToggle}>
                {sidebarOpened ? <FiX /> : <FiMenu />}
            </button>
            <ul className="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex ml-2">
                <li className="inline">
                    <a href="#">Manager</a>
                </li>
                <li className="inline">
                    <span>{telaAtual}</span>
                </li>
            </ul>
        </nav>
        {/* // -- Navbar end -- */}
        {/* <!-- Sidebar start--> */}
        <div id="containerSidebar" className="z-40">
            <div className="navbar-menu relative z-40">
                <nav id="sidebar"
                    className="fixed left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80">
                    {/* <!-- one category / navigation group --> */}
                    <div className="px-4 pb-6">
                        <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                            Main
                        </h3>
                        <ul className="mb-8 text-sm font-medium">
                            <li>
                                <button type="button" className="flex items-center w-full py-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    onClick={() => openCloseOption("dropdown-example")}>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Cadastros</span>
                                    <FiChevronDown />
                                </button>
                                <ul id="dropdown-example" className="py-2 space-y-2 hidden">
                                    <li>
                                        <a className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                                            href="/clientes">Clientes</a>
                                    </li>
                                    <li>
                                        <a className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11" target="_blank">Billing</a>
                                    </li>
                                    <li>
                                        <a className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11" target="_blank">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#homepage">
                                    <span className="select-none">Opção 1</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#link1">
                                    <span className="select-none">Opção 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- navigation group end--> */}

                    {/* <!-- example copies start --> */}
                    <div className="px-4 pb-6">
                        <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                            Opção 3
                        </h3>
                        <ul className="mb-8 text-sm font-medium">
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#tc">
                                    <span className="select-none">Terms and Condition</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#privacy">
                                    <span className="select-none">Opção 4</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#imprint">
                                    <span className="select-none">Opção 5</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="px-4 pb-6">
                        <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                            Others
                        </h3>
                        <ul className="mb-8 text-sm font-medium">
                            <li>
                                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#ex1">
                                    <span className="select-none">Opção 6</span>
                                </a>
                            </li>
                            <li>
                                <a className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                                    href="#ex2">
                                    <span className="select-none">Opção 7</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- example copies end --> */}
                </nav>
            </div>
            <div className="mx-auto lg:ml-80"></div>
        </div>
        {/* <!-- Sidebar end --> */}

    </>)
}