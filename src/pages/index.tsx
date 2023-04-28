import React from 'react'
import 'flowbite'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import discord from '../assets/logo/discord.svg'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white dark:bg-gray-800 dark:border-gray-700" style={{ height: '100vh', position: 'fixed' }}>
      {/* top navigation bar */}
      <Navbar />

      <div className="mx-auto text-gray-90 dark:text-white h-full w-full">
        {/* dashboard content */}
        <div className="w-full h-full bg-white dark:bg-gray-800 dark:border-gray-700">
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li className="w-full hidden">
              <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"></button>
            </li>
          </ul>

          {/* all main cards */}
          <div className="grid grid-cols-3 grid-rows-1 gap-8 rounded-lg md:p-8 dark:bg-gray-800 h-full w-full" id="stats" role="tabpanel" aria-labelledby="stats-tab" style={{ height: "67%" }}>

            {/* total graduates card */}
            <div className="mb-2 overflow-auto block w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-fit">
              <table className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full max-h-full">
                <thead className='sticky top-0 z-10 bg-gray-100 h-12'>
                  <tr className="font-bold text-center text-xl text-gray-800"><th>Total Graduates</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='flex mt-2 px-16'>
                      {/* timeline */}
                      <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                          </span>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Batch 10P</h3>
                          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 13, 2022</time>
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                        </li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* active trainers card */}
            <div className="mb-2 overflow-auto block w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-full">
              <table className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full max-h-full">
                <thead className='sticky top-0 z-10 bg-gray-100 h-12'>
                  <tr className="font-bold text-lg text-gray-800 border-b">
                    <th className='px-4 w-auto text-left'>Active Trainers</th>
                    <th className='px-4 w-auto text-center'>Discord</th>
                  </tr>
                </thead>
                <tbody className='whitespace-nowrap'>
                  <tr className='text-black mb-1 h-fit py-1'>
                    <td className='px-4 text-left py-2'>
                      <h2 className='border-l-2 border-blue-700 px-2 py-1'>Sabino, Rustia (Mutya)</h2>
                    </td>
                    <td className='items-center justify-center flex py-2'>
                      <a href="#">
                        <Image src={discord} alt="/" className='w-[1.6rem]' />
                      </a>
                    </td>
                  </tr>
                  <tr className='text-black mb-1 h-fit py-1'>
                    <td className='px-4 text-left py-2'>
                      <h2 className='border-l-2 border-blue-700 px-2 py-1'>Miguel, Edvenson Jay (Ed)</h2>
                    </td>
                    <td className='items-center justify-center flex py-2'>
                      <a href="#">
                        <Image src={discord} alt="/" className='w-[1.6rem]' />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* for pooling trainers card */}
            <div className="mb-2 overflow-auto block w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-full">
              <table className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full max-h-full">
                <thead className='sticky top-0 z-10 bg-gray-100 h-12'>
                  <tr className="font-bold text-lg text-gray-800 border-b">
                    <th className='px-4 w-auto text-left'>For Pooling Trainers</th>
                    <th className='px-4 w-auto text-center'>Discord</th>
                  </tr>
                </thead>
                <tbody className='whitespace-nowrap'>
                  <tr className='text-black mb-1 h-fit py-1'>
                    <td className='px-4 text-left py-2'>
                      <h2 className='border-l-2 border-blue-700 px-2 py-1'>April Jane Garfin (Jane)</h2>
                    </td>
                    <td className='items-center justify-center flex py-2'>
                      <a href="#">
                        <Image src={discord} alt="/" className='w-[1.6rem]' />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* sub cards */}
          <div className='max-h-full w-full mt-[-1rem]'>
            <dl className="grid max-w-screen-xl grid-cols-4 gap-60 p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-4 dark:text-white sm:p-8">
              {/* graduated class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">--</dt>
                <dd className="text-gray-500 dark:text-gray-400">Graduated Class</dd>
              </div>
              {/* active students card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">143</dt>
                <dd className="text-gray-500 dark:text-gray-400">Active Students</dd>
              </div>
              {/* ongoing class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">12</dt>
                <dd className="text-gray-500 dark:text-gray-400">Ongoing Class</dd>
              </div>
              {/* pending class card */}
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold text-[#EF8134]">1</dt>
                <dd className="text-gray-500 dark:text-gray-400">Pending Class</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}