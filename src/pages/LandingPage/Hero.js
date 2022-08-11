import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useState } from 'react';

const Hero = () => {

  const [search,setSearch] = useState("");

    
    const handleChangeSearch = (event) => setSearch(event.target.value)
    const handleSearch = (event) => {
      event.preventDefault()
      // navigate('/job-vacancy')
      console.log(search)
  
    }

  return (
    <>
        <div className="container max-h-50vh mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10 gap-4">
            <h1 className="font-bold text-5xl sm:text-5xl text-indigo-600 leading-tight mt-4">
                Karir impian mu ada disini.
                <br/>
            </h1>
            <p>Dapatkan pekerjaan yang cocok untukmu di KanvasJobs.</p>

            <div>
                
            </div>
            <form onSubmit={handleSearch}>
              <input type="text" value={search} onChange={handleChangeSearch} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Cari Pekerjaan Impian Anda.."/>
              <button type='onSubmit' className="block bg-indigo-600 hover:bg-indigo-800 py-3 px-4 rounded-lg text-lg text-white font-bold uppercase mt-5"> 
                  Cari
              </button>
            </form>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/assets/landingpage.png" className="max-w-sm md:max-w-sm m-auto"/>
        </div>
        </div>
    </>
    
  )
}

export default Hero