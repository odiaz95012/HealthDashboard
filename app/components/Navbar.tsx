"use client";
import React, { useState } from "react";
import "../globals.css";
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(2);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }
    const handleActiveTabChange = (option: number) => {
        if(option === activeTab) return;

        setActiveTab(option);
    }
    return (
        <>

            <div className="flex justify-center items-center mt-5">
                <nav className="border-gray-200 w-10/12" id="navbar">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-1 rtl:space-x-reverse">
                            <img src="TestLogo.svg" className="h-8" alt="Flowbite Logo" />
                        </a>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <img className="w-8 h-8 rounded-full" src="senior-woman-doctor.png" alt="Dr. Jose Simmons" />

                            <div className="flex-1 justify-center items-center text-center pl-1 pr-5 -space-y-1 border-r-2">
                                <p id="doc-name">Dr. Jose Simmons</p>
                                <p id="doc-label">General Practicioner</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="button" className="flex rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="settings-icon" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <img className="h-6 px-2 icon" src="settings.svg" alt="Settings" />
                                </button>
                                <button type="button" className="flex rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="more-vert-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <img className="h-6 px-1 icon" src="more-vert.svg" alt="More vert button" />
                                </button>
                            </div>

                            {/* {<!-- Dropdown menu -->} */}
                            <div className={`z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${isOpen ? 'block' : 'hidden'}`} >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900">Bonnie Green</span>
                                    <span className="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-user" onClick={handleMenuToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="flex flex-col h-[41px] font-medium p-4 md:p-0 mt-4 justify-center items-center border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                <li className={`h-full ${activeTab == 1 ? 'active-nav-item' : ''}`} onClick={() => handleActiveTabChange(1)}>
                                    <a href="#" className={`block py-2 px-3 h-full rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0}`} aria-selected="false">
                                        <div className="flex justify-evenly items-center text-center">
                                            <img src="home.svg" className="px-1" />
                                            <div className="body-emphasized-14pt">
                                                <span>Overview</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={`h-full ${activeTab == 2 ? 'active-nav-item' : ''}`} onClick={() => handleActiveTabChange(2)}>
                                    <a href="#" className={`block py-2 px-3 h-full rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`} aria-selected="true">
                                        <div className="flex justify-evenly items-center text-center mt-2 px-3">
                                            <img src="patients.svg" className="px-1" />
                                            <div className="body-emphasized-14pt">
                                                <span>Patients</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={`h-full ${activeTab == 3 ? 'active-nav-item' : ''}`} onClick={() => handleActiveTabChange(3)}>
                                    <a href="#" className={`block py-2 px-3 h-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`} aria-selected="false">
                                        <div className="flex justify-evenly items-center text-center mt-2 px-3">
                                            <img src="calendar.svg" className="px-1" />
                                            <div className="body-emphasized-14pt">
                                                <span>Schedule</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={`h-full ${activeTab == 4 ? 'active-nav-item' : ''}`} onClick={() => handleActiveTabChange(4)}>
                                    <a href="#" className={`block py-2 px-3 h-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`} aria-selected="false">
                                        <div className="flex justify-evenly items-center text-center mt-2 px-3">
                                            <img src="message.svg" className="px-2" />
                                            <div className="body-emphasized-14pt">
                                                <span>Message</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={`h-full ${activeTab == 5 ? 'active-nav-item' : ''}`} onClick={() => handleActiveTabChange(5)}>
                                    <a href="#" className={`block py-2 px-3 h-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`} aria-selected="false">
                                        <div className="flex justify-evenly items-center text-center mt-2 px-3">
                                            <img src="credit-card.svg" className="px-2" />
                                            <div className="body-emphasized-14pt">
                                                <span>Transactions</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}