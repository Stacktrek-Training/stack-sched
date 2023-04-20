import 'flowbite'
import Image from 'next/image';
import logo from '../assets/logo/logo-stack-sched.png';
import home from '../assets/ico/home.svg';
import chat from '../assets/ico/chat.svg';
import bell from '../assets/ico/bell.svg';
import profile from '../assets/img/cyber-punk.jpeg'
import toga from '../assets/ico/toga.svg'

export default function Home() {
  return (
    <div className="h-screen max-w-screen">

      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* logo */}
          <a href="/" className="flex items-center">
            <Image src={logo} alt="/" className='w-[16rem] ml-[-1rem]' />
          </a>

          {/* profile picture */}
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Image src={profile} alt="user photo" className='w-8 h-8 rounded-full' />
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
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
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
              aria-expanded="false"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-[-1rem]"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[-0.1rem]">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 mt-1 mr-2"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  Trainers Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  Events
                </a>
              </li>
              <li>
                <a href="/trainers"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  Trainers
                </a>
              </li>
              {/* link icons */}
              <li>
                <a href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2 ml-[-2.9rem]"
                >
                  <Image src={home} alt="/" className='w-[1.6rem] ml-12 mr-3' />
                </a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  <Image src={chat} alt="/" className='w-[1.7rem] mr-3' />
                </a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  <Image src={bell} alt="/" className='w-[1.5rem]' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* dashboard content */}
        <div className="w-full min-h-screen bg-white dark:bg-gray-800 dark:border-gray-700">
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li className="w-full hidden">
              <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"></button>
            </li>
          </ul>

          {/* all cards */}
          <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">

            {/* total graduates card */}
            <div className="overflow-auto block max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-80 mb-4">
              <table className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
                <thead>
                  <tr className="font-bold text-center text-xl text-gray-800"><th>Total Graduates</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* timeline */}
                      <div className='flex mt-[-1rem]'>
                        <ol className="items-center sm:flex">
                          <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Batch 10P</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 15, 2023</time>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                            </div>
                          </li>
                          <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Batch 9P</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 3, 2022</time>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                            </div>
                          </li>
                          <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Batch 8P</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 28, 2022</time>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* sub cards */}
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              {/* active trainers card */}
              <div className="flex flex-col items-center justify-center">
                <dt className=" text-4xl font-extrabold text-[#EF8134]">19</dt>
                <dd className="text-gray-500 dark:text-gray-400">Active Trainers</dd>
              </div>
              {/* for pooling trainers card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-4xl font-extrabold text-[#EF8134]">8</dt>
                <dd className="text-center text-gray-500 dark:text-gray-400">For Pooling Trainers</dd>
              </div>
              {/* ongoing class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-4xl font-extrabold text-[#EF8134]">12</dt>
                <dd className="text-gray-500 dark:text-gray-400">Ongoing Class</dd>
              </div>
              {/* pending class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-4xl font-extrabold text-[#EF8134]">1</dt>
                <dd className="text-gray-500 dark:text-gray-400">Pending Class</dd>
              </div>
              {/* graduated class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-4xl font-extrabold text-[#EF8134]">--</dt>
                <dd className="text-gray-500 dark:text-gray-400">Graduated Class</dd>
              </div>
              {/* active students card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-4xl font-extrabold text-[#EF8134]">143</dt>
                <dd className="text-gray-500 dark:text-gray-400">Active Students</dd>
              </div>
            </dl>
          </div>
        </div>

      </nav>

    </div>
  )
}
