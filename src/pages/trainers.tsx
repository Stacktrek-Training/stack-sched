import React from 'react'
import 'flowbite'
import Image from 'next/image';
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import ButtonsTrainersTable from '../components/ButtonsTrainersTable'
import editIcon from '../assets/ico/edit.svg'
import discord from '../assets/logo/discord.svg'
import github from '../assets/logo/github.svg'
import linkedin from '../assets/logo/linkedin.svg'
import gmail from '../assets/logo/gmail.svg'
import girl1 from '../assets/img/girl1.jpg'
import girl2 from '../assets/img/girl2.jpg'

const trainers = () => {
  return (
    <div className="pb-4 h-screen max-w-screen bg-white dark:bg-gray-800 dark:border-gray-700">
      {/* top navigation bar */}
      <Navbar />

      <div className='mt-[1.28rem] inline-flex w-full max-h-screen'>
        {/* mini dashboard */}
        <div className='max-w-full'>
          <dl className="mr-2 grid max-w-screen-xl grid-cols-1 gap-9 mx-auto text-gray-900 sm:grid-cols-1 xl:grid-cols-1 dark:text-white sm:p-9 grid-rows-3 w-32 ml-2">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">19</dt>
              <dd className="text-gray-500 dark:text-gray-400 text-center">Active Trainers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">8</dt>
              <dd className="text-gray-500 dark:text-gray-400 text-center">For Pooling Trainers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">27</dt>
              <dd className="text-gray-500 dark:text-gray-400 text-center">Total Trainers</dd>
            </div>
          </dl>
        </div>

        {/* tabs and table */}
        <div className='pr-3 w-full'>
          <div className='p-3 inline-flex w-full max-h-screen'>

            {/* search bar with filter dropdown */}
            <div className="inline-flex w-full">
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
                      Date Onboard
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Name (A-Z)
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Status
                    </button>
                  </li>
                </ul>
              </div>
              <Search />
              <ButtonsTrainersTable />
            </div>
          </div>

          {/* trainers table */}
          <div className="relative shadow-md sm:rounded-lg mt-7 border-8 h-[28.1rem] max-w-screen">
            <div className="overflow-x-auto">
              <table className="bg-black-200 w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                {/* header */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th scope="col" className="py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Specific Role
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date Onboard
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Skills
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Available Schedule
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Action
                    </th>
                  </tr>
                </thead>
                {/* data */}
                <tbody className='overflow-auto'>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* checkbox */}
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    {/* name column */}
                    <td scope="row" className="flex items-center px-0 py-4 text-gray-900  dark:text-white">
                      <div className="relative w-[2.6rem]">
                        <Image className="max-w-full h-10 rounded-full" src={girl2} alt="profile image" />

                        <span className="top-7 left-7 absolute  w-3.5 h-3.5 bg-[#fead81] border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className="pl-3">
                        <div className="text-base font-semibold">Garfin, April Jane (Jane)</div>
                        <div className="font-normal text-gray-500">09xxxxxxxxx</div>
                        <div className="flex font-normal text-gray-500">apriljanegarfin.stacktrek@gmail.com</div>
                      </div>
                    </td>
                    {/* address column */}
                    <td className="px-6 py-4">
                      Sibalom, Antique
                    </td>
                    {/* specific role column */}
                    <td className="px-6 py-4">
                      Trainer
                    </td>
                    {/* status column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Active
                      </div>
                    </td>
                    {/* date onboard column */}
                    <td className="px-6 py-4">
                      February 18, 2023
                    </td>
                    {/* certification column */}
                    {/* skills column */}
                    <td className="px-6 py-4">
                      Java, HTML, CSS
                    </td>
                    {/* available schedule column */}
                    <td className="px-6 py-4">
                      M W F - 1:00  -4:00
                    </td>
                    {/* action column */}
                    <td className="px-7 py-4 flex-wrap items-center align-middle">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={discord} alt="/" className='w-[1.6rem] mr-1 mb-1' /></a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={github} alt="/" className='w-[1.5rem] mr-1 mb-1' /></a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={linkedin} alt="/" className='w-[1.7rem] mr-1 mb-1' /></a>
                      <a href="#" data-modal-target="edit-modal" data-modal-toggle="edit-modal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={editIcon} alt="/" className='w-[1.5rem] mr-1' /></a>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* checkbox */}
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    {/* name column */}
                    <td scope="row" className="flex items-center py-4 text-gray-900  dark:text-white">
                      <div className="relative w-[2.6rem]">
                        <Image className="max-w-full h-10 rounded-full" src={girl1} alt="profile image" />

                        <span className="top-7 left-7 absolute  w-3.5 h-3.5 bg-[#ffdd81] border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className="pl-3">
                        <div className="text-base font-semibold">Sabino, Rustia (Mutya)</div>
                        <div className="font-normal text-gray-500">09xxxxxxxxx</div>
                        <div className="font-normal text-gray-500">rustiasabino.stacktrek@gmail.com</div>
                      </div>
                    </td>
                    {/* address column */}
                    <td className="px-6 py-4">
                      Sibalom, Antique
                    </td>
                    {/* specific role column */}
                    <td className="px-6 py-4">
                      Trainer
                    </td>
                    {/* status column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Active
                      </div>
                    </td>
                    {/* date onboard column */}
                    <td className="px-6 py-4">
                      February 18, 2023
                    </td>
                    {/* certification column */}
                    {/* skills column */}
                    <td className="px-6 py-4">
                      Java, HTML, CSS
                    </td>
                    {/* available schedule column */}
                    <td className="px-6 py-4">
                      M W F - 1:00  -4:00
                    </td>
                    {/* action column */}
                    <td className="px-7 py-4 flex-wrap items-center align-middle">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={discord} alt="/" className='w-[1.6rem] mr-1 mb-1' /></a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={github} alt="/" className='w-[1.5rem] mr-1 mb-1' /></a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={linkedin} alt="/" className='w-[1.7rem] mr-1 mb-1' /></a>
                      <a href="#" data-modal-target="edit-modal" data-modal-toggle="edit-modal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Image src={editIcon} alt="/" className='w-[1.5rem] mr-1' /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* modal for add trainer */}
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
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Register a Trainer</h3>
                  {/* form */}
                  <form className="space-y-4" action="#">
                    {/* personal details section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personal Details</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                      {/* first name input */}
                      <div>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='First name' required />
                      </div>
                      {/* last name input */}
                      <div>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Last name' required />
                      </div>
                      {/* nickname input */}
                      <div>
                        <input type="text" id="nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Nickname' required />
                      </div>
                    </div>
                    {/* address input */}
                    <div>
                      <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                    </div>
                    {/* mobile number input */}
                    <div>
                      <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" pattern="[0-9]{11}" required />
                    </div>

                    {/* links section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Links</h1>
                    {/* e-mail input */}
                    <div className='inline-flex w-full'>
                      <Image src={gmail} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="gmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail address" required />
                    </div>
                    {/* discord input */}
                    <div className='inline-flex w-full'>
                      <Image src={discord} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="discord" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discord ID" required />
                    </div>
                    {/* linkedin input */}
                    <div className='inline-flex w-full'>
                      <Image src={linkedin} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Linkedin profile link" required />
                    </div>

                    {/* shift details section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shift Details</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      {/* date onboard */}
                      <div>
                        <h1 className="block mb-2 text-sm font-sm text-gray-900 dark:text-white">Date Onboard:</h1>
                        <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      {/* status */}
                      <div>
                        <h1 className="block mb-2 text-sm font-sm text-gray-900 dark:text-white">Status</h1>
                        <button id="dropdownFormButton" data-dropdown-toggle="dropdown2" className="w-full bg-gray-50 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select<svg className="w-full h-4 ml-24" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        {/* status dropdown content */}
                        <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownFormButton">
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Active</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">For Pooling</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* skills related section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills Related</h1>
                    {/* certificatin input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="certification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Certification" required />
                    </div>
                    {/* expertise input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="expertise" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Expertise" required />
                    </div>
                    {/* skills input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Skills" required />
                    </div>

                    {/* division for submit button */}
                    <div className='mt-4 text-center'>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
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
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Update Trainers Details</h3>
                  {/* form */}
                  <form className="space-y-4" action="#">
                    {/* personal details section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personal Details</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                      {/* first name input */}
                      <div>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='First name' required />
                      </div>
                      {/* last name input */}
                      <div>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Last name' required />
                      </div>
                      {/* nickname input */}
                      <div>
                        <input type="text" id="nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Nickname' required />
                      </div>
                    </div>
                    {/* address input */}
                    <div>
                      <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                    </div>
                    {/* mobile number input */}
                    <div>
                      <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" pattern="[0-9]{11}" required />
                    </div>

                    {/* links section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Links</h1>
                    {/* e-mail input */}
                    <div className='inline-flex w-full'>
                      <Image src={gmail} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="gmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail address" required />
                    </div>
                    {/* discord input */}
                    <div className='inline-flex w-full'>
                      <Image src={discord} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="discord" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discord ID" required />
                    </div>
                    {/* linkedin input */}
                    <div className='inline-flex w-full'>
                      <Image src={linkedin} alt="/" className='w-[1.6rem] mr-1 mb-1' />
                      <input type="text" id="linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Linkedin profile link" required />
                    </div>

                    {/* shift details section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shift Details</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      {/* date onboard */}
                      <div>
                        <h1 className="block mb-2 text-sm font-sm text-gray-900 dark:text-white">Date Onboard:</h1>
                        <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      {/* status */}
                      <div>
                        <h1 className="block mb-2 text-sm font-sm text-gray-900 dark:text-white">Status</h1>
                        <button id="dropdownFormButton" data-dropdown-toggle="dropdown2" className="w-full bg-gray-50 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select<svg className="w-full h-4 ml-24" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        {/* status dropdown content */}
                        <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownFormButton">
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Active</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">For Pooling</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* skills related section */}
                    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills Related</h1>
                    {/* certificatin input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="certification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Certification" required />
                    </div>
                    {/* expertise input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="expertise" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Expertise" required />
                    </div>
                    {/* skills input */}
                    <div className='inline-flex w-full'>
                      <input type="text" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Skills" required />
                    </div>

                    {/* division for submit button */}
                    <div className='mt-4 text-center'>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default trainers
