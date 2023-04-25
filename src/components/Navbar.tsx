import React from 'react'
import 'flowbite'
import Image from "next/image"
import logo from "../assets/logo/logo-stack-sched.png"
import home from "../assets/ico/home.svg"
import chat from "../assets/ico/chat.svg"
import bell from "../assets/ico/bell.svg"
import profile from "../assets/img/cyber-punk.jpeg"

const Navbar = () => {
    return (
        <nav className="h-12 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl align-middle flex flex-wrap items-center justify-between mx-auto p-4">
                {/* logo */}
                <a href="/" className="flex items-center">
                    <Image src={logo} alt="/" className="w-[16rem] ml-[-1rem] mt-[-0.4rem]" />
                </a>

                {/* profile picture */}
                <div className="flex items-center md:order-2 mt-[-0.85rem]">
                    <button
                        type="button"
                        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <Image
                            src={profile}
                            alt="user photo"
                            className="w-8 h-8 rounded-full"
                        />
                    </button>

                    {/* dropdown content when profile picture clicked */}
                    <div
                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown"
                    >
                        {/* profile picture dropdown content */}
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">
                                Rieza Marie Banquillo
                            </span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                riezabanquillo.stacktrek@gmail.com
                            </span>
                        </div>
                        {/* drop down links */}
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* menu button for mobile view */}
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="true"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* link tabs */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-[-1rem] mt-[-0.2rem] z-20"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[-0.1rem]">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:text-blue-500 mt-1 mr-2">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/schedule" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2">
                                Trainers Schedule
                            </a>
                        </li>
                        <li>
                            <a href="/trainers" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2">
                                Trainers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
