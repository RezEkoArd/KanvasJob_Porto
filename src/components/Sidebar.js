import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
   
  return (
    <>
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
            <div className="bg-white h-full dark:bg-gray-700">
                <div className="flex items-center justify-start pt-6 ml-8">
                    <Link to={'/'}><span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">KanvasJobs</span>
                     </Link>
                </div>
                <nav className="mt-6">
                    <div>
                        <Link to={'/dashboard/list-job-vacancy'} className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-2 text-sm font-normal">
                                Home
                            </span>
                        </Link>

                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Sidebar