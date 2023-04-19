import React from 'react'
import 'flowbite'
import Image from 'next/image';
import logo from '../assets/logo/logo-stack-sched.png';
import home from '../assets/ico/home.svg';
import chat from '../assets/ico/chat.svg';
import bell from '../assets/ico/bell.svg';
import profile from '../assets/img/cyber-punk.jpeg'
import exportIcon from '../assets/ico/export.svg'
import deleteIcon from '../assets/ico/delete.svg'
import addIcon from '../assets/ico/add.svg'
import editIcon from '../assets/ico/edit.svg'
import boy1 from '../assets/img/boy1.jpg'
import boy2 from '../assets/img/boy2.jpg'
import boy3 from '../assets/img/boy3.png'
import girl1 from '../assets/img/girl1.jpg'
import girl2 from '../assets/img/girl2.jpg'

const schedule = () => {
  return (
    <div>

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

            {/* dropdown menu when profile picture clicked */}
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
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[-0.1rem]">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-1 mr-2"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 mt-1 mr-2"
                  aria-current="page"
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

        {/* tabs and table */}
        <div className='pr-5 pl-5 max-w-screen'>
          <div className='p-3'>

            {/* search bar with filter dropdown */}
            <div className="inline-flex w-full mt-5 mr-5">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 h-full"
                type="button"
              >
                Filter{" "}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* filter dropdown content */}
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Person
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Schedule Time
                    </button>
                  </li>
                </ul>
              </div>
              {/* search bar */}
              <div className="relative w-96">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>

            {/* sub header tab */}
            <div className='flex justify-end max-w-screen'>

              {/* previous and next buttons */}
              <div className="inline-flex rounded-md shadow-sm mt-[0.06rem] h-[2.4rem]" role="group">
                {/* previous button */}
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <nav className="flex items-center justify-between" aria-label="Table navigation">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a href="#">
                          <span className="sr-only">Previous</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">Previous</a>
                      </li>
                    </ul>
                  </nav>
                </button>
                {/* next button */}
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <nav className="flex items-center justify-between" aria-label="Table navigation">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a href="#">Next</a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sr-only">Next</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </button>
              </div>

              {/* sub header buttons */}
              <div className="inline-flex rounded-md shadow-sm mt-[0.01rem] h-[2.45rem]" role="group">
                <div className='flex max-w-screen'>
                  {/* export button */}
                  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <Image src={exportIcon} alt="/" className='w-4 mr-2' />
                    Export
                  </button>
                  {/* delete button */}
                  <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <Image src={deleteIcon} alt="/" className='w-4 mr-2' />
                    Delete
                  </button>
                </div>

                {/* modal for delete button */}
                <div id="popup-modal" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* X button for close modal */}
                      <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="p-6 text-center">
                        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {/* message */}
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this schedule?</h3>
                        {/* yes */}
                        <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Yes, I'm sure
                        </button>
                        {/* cancel */}
                        <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* add button */}
                <button data-modal-target="add-modal" data-modal-toggle="add-modal" type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <Image src={addIcon} alt="/" className='w-4 mr-2' />
                  Add Shift
                </button>
              </div>
            </div>
          </div>

          {/* trainers table */}
          <div className="relative shadow-md sm:rounded-lg mt-7 border-l-4 border-l-[#D55458] h-[32rem]">
            <div className="overflow-x-auto">
              <table className="border-8 border-left-3 bg-black-200 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* header */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Shift Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Monday
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Tuesday
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Wednesday
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thursday
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Friday
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Saturday
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Action
                    </th>
                  </tr>
                </thead>
                {/* data */}
                <tbody className='overflow-auto'>
                  {/* first row */}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* checkbox */}
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    {/* time column */}
                    <td className="px-6 py-4">
                      9:00 AM - 11:00 AM
                    </td>
                    {/* monday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={profile} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={boy1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={girl2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* tuesday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={profile} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={boy1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={girl2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* wednesday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={profile} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={boy1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={girl2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* thursday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={profile} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={boy1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={girl2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* friday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={profile} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={boy1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                        <Image src={girl2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* saturday column */}
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    {/* action column */}
                    <td className="px-[2.2rem] py-4">
                      <a href="#" data-modal-target="edit-modal" data-modal-toggle="edit-modal" className="w-full font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Image src={editIcon} alt="/" className='w-[1.5rem]' /></a>
                    </td>
                  </tr>

                  {/* Second row */}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      10:00 AM - 11:00 AM
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy3} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy3} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy3} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy3} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={girl1} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex flex-row'>
                        <Image src={boy2} alt="user profile" className='w-10 h-10 rounded-full mr-[-0.5rem]' />
                      </div>
                    </td>
                    <td className="px-[2.2rem] py-4">
                      <a href="#" data-modal-target="edit-modal" data-modal-toggle="edit-modal" className="w-full font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Image src={editIcon} alt="/" className='w-[1.5rem]' /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* modal for add trainer form */}
          <div id="add-modal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* X button for close modal */}
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="add-modal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                {/* modal content */}
                <div className="px-6 py-6 lg:px-8">
                  {/* title */}
                  <h3 className="mb-8 text-xl font-medium text-gray-900 dark:text-white text-center">Add Shift</h3>
                  {/* form */}
                  <form className="space-y-6" action="#">

                    {/* trainers dropdown button */}
                    <div>
                      <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className=" text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Trainers<svg className="w-4 h-4 ml-72" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                      {/* trainers dropdown content */}
                      <div id="dropdownBgHover" className="z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700 w-96">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Garfin, April Jane</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* start date */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date : </label>
                      <input className="w-[19.41rem] text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-[0.01rem] dark:focus:ring-blue-800" type="date" />
                    </div>

                    {/* repeat day selection */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat on : </label>
                      <ul className="items-center w-full text-sm font-medium text-gray-900  rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {/* monday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mon</label>
                          </div>
                        </li>
                        {/* tuesday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tue</label>
                          </div>
                        </li>
                        {/* wednesday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wed</label>
                          </div>
                        </li>
                        {/* thursday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thur</label>
                          </div>
                        </li>
                        {/* friday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fri</label>
                          </div>
                        </li>
                        {/* saturday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sat</label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* repeat every */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat every : </label>
                      <input className="w-20 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-[0.01rem] dark:focus:ring-blue-800" type="number" />
                      <button id="dropdownRepeatButton" data-dropdown-toggle="dropdownRepeat" className="ml-4 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">select<svg className="w-4 h-4 ml-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                      <div id="dropdownRepeat" className="border z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700 w-28">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                          {/* day */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">day</label>
                            </div>
                          </li>
                          {/* week */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">week</label>
                            </div>
                          </li>
                          {/* month */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">month</label>
                            </div>
                          </li>
                          {/* year */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">year</label>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* ends in */}
                      <div className='mt-4'>
                        <label htmlFor="last_name" className="text-sm font-medium text-gray-900 dark:text-white">Ends : </label>
                        {/* never */}
                        <div className="flex items-center mb-4 mt-4">
                          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Never</label>
                        </div>
                        {/* on */}
                        <div className="flex items-center">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On</label>
                          <input className="ml-8 max-w-full text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none dark:focus:ring-blue-800" type="date" />
                        </div>
                        {/* after */}
                        <div className="flex items-center mt-4">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">After</label>
                          <input className="w-20 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-4 dark:focus:ring-blue-800 z-50" type="number" />
                          <input className="ml-[-0.2rem] max-w-full text-black bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none dark:focus:ring-blue-800" type="number" placeholder='occurerences' disabled />
                        </div>
                      </div>
                    </div>

                    {/* submit button */}
                    <div className='mt-4 text-center'>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* modal for edit trainer form */}
          <div id="edit-modal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* X button for close modal */}
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="edit-modal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                {/* modal content */}
                <div className="px-6 py-6 lg:px-8">
                  {/* title */}
                  <h3 className="mb-8 text-xl font-medium text-gray-900 dark:text-white text-center">Edit Shift</h3>
                  {/* form */}
                  <form className="space-y-6" action="#">

                    {/* trainers dropdown button */}
                    <div>
                      <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className=" text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Trainers<svg className="w-4 h-4 ml-72" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                      {/* trainers dropdown content */}
                      <div id="dropdownBgHover" className="z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700 w-96">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Garfin, April Jane</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* start date */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date : </label>
                      <input className="w-[19.41rem] text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-[0.01rem] dark:focus:ring-blue-800" type="date" />
                    </div>

                    {/* repeat day selection */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat on : </label>
                      <ul className="items-center w-full text-sm font-medium text-gray-900  rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {/* monday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mon</label>
                          </div>
                        </li>
                        {/* tuesday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tue</label>
                          </div>
                        </li>
                        {/* wednesday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wed</label>
                          </div>
                        </li>
                        {/* thursday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thur</label>
                          </div>
                        </li>
                        {/* friday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fri</label>
                          </div>
                        </li>
                        {/* saturday */}
                        <li className="w-full  dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" placeholder='S' />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sat</label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* repeat every */}
                    <div>
                      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat every : </label>
                      <input className="w-20 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-[0.01rem] dark:focus:ring-blue-800" type="number" />
                      <button id="dropdownRepeatButton" data-dropdown-toggle="dropdownRepeat" className="ml-4 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">select<svg className="w-4 h-4 ml-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                      <div id="dropdownRepeat" className="border z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700 w-28">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                          {/* day */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">day</label>
                            </div>
                          </li>
                          {/* week */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">week</label>
                            </div>
                          </li>
                          {/* month */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">month</label>
                            </div>
                          </li>
                          {/* year */}
                          <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label htmlFor="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">year</label>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* ends in */}
                      <div className='mt-4'>
                        <label htmlFor="last_name" className="text-sm font-medium text-gray-900 dark:text-white">Ends : </label>
                        {/* never */}
                        <div className="flex items-center mb-4 mt-4">
                          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Never</label>
                        </div>
                        {/* on */}
                        <div className="flex items-center">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On</label>
                          <input className="ml-8 max-w-full text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none dark:focus:ring-blue-800" type="date" />
                        </div>
                        {/* after */}
                        <div className="flex items-center mt-4">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">After</label>
                          <input className="w-20 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none ml-4 dark:focus:ring-blue-800 z-50" type="number" />
                          <input className="ml-[-0.2rem] max-w-full text-black bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 border-none dark:focus:ring-blue-800" type="number" placeholder='occurerences' disabled />
                        </div>
                      </div>
                    </div>

                    {/* submit button */}
                    <div className='mt-4 text-center'>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav >

    </div>
  )
}

export default schedule
