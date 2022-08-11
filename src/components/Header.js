import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to={"/"} className="flex items-center">
      <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">KanvasJobs</span>
    </Link>
    
    <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul className="flex flex-col items-center p-4 mt-4 bg-indigo-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={"/"} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={"/job-vacancy"} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Lamar Kerja</Link>
        </li>
        <li>
          <Link to={"/Login"}>
            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/register'}>
          <button type="button" className="py-1 px-3  outline outline-offset-1 outline-indigo-600 text-indigo hover:bg-indigo-700 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Daftar
          </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header