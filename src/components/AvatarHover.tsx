import React from 'react'

const AvatarHover = () => {
    return (
        <div>
            {/* popover card header */}
            <div className="w-full inline-flex px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Banquillo, Rieza Marie (Rie)</h3>
            </div>
            {/* popover card body */}

            <div className="px-3 py-3 inline-flex">
                {/* history og schedule */}
                <div className='bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-3 w-96 mr-4'>
                    <div className='w-full'>
                        <h2 className='text-center font-semibold text-gray-900'>History of Schedule</h2>
                    </div>
                </div>

                {/* side cards */}
                <div className="overflow-auto block w-2/4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-full">
                    <dl className="grid max-w-screen max-h-screen grid-cols-1 grid-rows-2 p-2 mx-auto text-gray-900 sm:grid-cols-1 xl:grid-cols-1 dark:text-white">
                        {/* average time per week card */}
                        <div className="flex flex-col items-center justify-center w-full mt-[-1.5rem]">
                            <dt className="text-3xl font-extrabold text-[#EF8134]">19</dt>
                            <dd className="text-center text-gray-500 dark:text-gray-400">Average time per week</dd>
                        </div>
                        {/* total number of hours card */}
                        <div className="w-full flex flex-col items-center justify-center mt-2">
                            <dt className="mb-2 text-3xl font-extrabold text-[#EF8134]">8</dt>
                            <dd className="text-center text-gray-500 dark:text-gray-400">Total number of hours</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div data-popper-arrow></div>
        </div>
    )
}

export default AvatarHover