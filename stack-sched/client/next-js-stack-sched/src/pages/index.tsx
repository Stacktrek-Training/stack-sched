export default function Home() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* logo */}
          <a href="#/" className="flex items-center">
            <img src="../assets/logo/logo-stack-sched.png" className="h-12" />
          </a>
          {/* division for user menu (profile picture) */}
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
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {/* division for drop down menu when profile picture clicked */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              {/* division for drop down details */}
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              {/* drop down links */}
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
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
            {/* side navigation button for mobile view */}
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
          {/* division for link tabs */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-0 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 mt-1 mr-2"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                <a href="#">
                  <img src="../assets/ico/ico-home.png" className="h-7 ml-20 mr-3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/ico/ico-chat.png" className="h-7 mr-3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/ico/ico-bell.png" className="h-6 mt-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Division for all cards */}
        <div className="ml-[2.5rem]">
          {/* division for card (graduated className) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-20 w-72 h-44 mt-20">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-lg">Graduated className</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  13
                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (total graduates) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[28rem] w-11/12 h-[14rem] mt-[-13.5rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-lg">Total Graduates</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">

                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (active students) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[57rem] w-72 h-44 mt-[-16.5rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-lg">Active Students</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  58
                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (pending className) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[5rem] w-72 h-44 mt-[-1rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-lg">Pending className</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  4
                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (ongoing className) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[28rem] w-44 h-44 mt-[-11rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-m">Ongoing className</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  5
                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (active trainers) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[41rem] w-44 h-44 mt-[-13.5rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-m">Active Trainers</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  23
                </td>
              </tbody>
            </table>
          </div>
          {/* division for card (for pooling trainers) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10 ml-[57rem] w-72 h-44 mt-[-16rem]">
            <table className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full h-full">
              <thead>
                <tr className="font-bold text-center text-lg">For Pooling Trainers</tr>
              </thead>
              <tbody>
                <td className="text-[#EF8134] font-bold text-6xl text-center">
                  12
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </nav>
    </div>
  )
}