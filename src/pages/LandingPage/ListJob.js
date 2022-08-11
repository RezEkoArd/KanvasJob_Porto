import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';




const ListJob = () => {
    const [items, setItems] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [query,setQuery] = useState("");
    
    useEffect(() => {    
     if(fetchStatus === true){
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setItems(res.data.data)  
        })
        .catch((err) => {
            console.log(err)
        })
        setFetchStatus(false)
     }

        
    },[fetchStatus, setFetchStatus])
    
    
    const handleSearchInput = (event) => {
        setQuery(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()

        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                
             const searchData = items.filter((res) => {
                    return Object.values(res).join(" ").toLowerCase().includes(query.toLowerCase())
                })
                
                setItems(searchData)
                
            }) 
    }

    const handleReset = (event) => {
        event.preventDefault()

        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setItems(res.data.data)  
            setFetchStatus(true)
        })
    }

  return (  
    <>

        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="relative bg-white dark:bg-gray-800">
                    <div className="flex flex-col sm:flex-row sm:justify-around">
                        <div className="w-72 h-screen">
                            {/* Content Side bar */}
                            <div className="bg-white rounded-lg  sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                <div className="px-4 py-8 sm:px-10">
                                    <div className="relative mt-6">
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-full space-y-3">
                                            <form onSubmit={handleSearch}>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                  <input type="text" onChange={handleSearchInput} className="outline-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Cari Pekerjaan .."/>
                                                 </div>
                                            </div>
                                            <div>
                                                 <span className="block mt-3 w-full rounded-md shadow-sm">
                                                    <button type="submit"  className="py-1 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Search</button>
                                                </span>
                                                 <span className="block mt-3 w-full rounded-md shadow-sm">
                                                    <button className="py-1 px-4  bg-red-700 hover:bg-red-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" onClick={handleReset}>Reset Data</button>
                                                </span>
                                            </div>
                                            </form>
                                
                                        </div>
                                    </div>
                                </div>
                                           
                            </div>
                        </div>
                    </div>
                </div> 
                           
                {/* Content Section */}
                
                <div className='flex flex-wrap h-screen w-full bg-indigo-200 pt-10 gap-5 align-center justify-center'>

                {items.map((item) => {
                    return (
                        <div className="flex w-2/5 h-1/4 bg-white shadow-lg rounded-lg overflow-hidden" key={item.id}>
                        <div className="w-1/3 bg-cover bg-auto flex-none py-auto">
                            <img src={item.company_image_url} alt="adidas" className="w-32  h-36 bg-cover  "/>
                        </div>
                        <div className="w-2/3 p-4 flex-col justify-between">
                            <h1 className="text-gray-900 font-bold text-xl">
                                {item.title} ({item.job_tenure})
                            </h1>
                            <p className="mt-1 font-semibold text-gray-600 text-md">
                                {item.company_name}
                            </p>
                            <p className="mt-1 text-gray-600 text-sm">
                                {item.company_city}, {item.job_type}
                            </p>
                            <div className="flex item-center justify-between mt-3">
                            <p className="mt-1 text-green-500 text-sm">
                                    a month ago
                            </p>
                            {item.job_status === 1 ? 
                            <span className="px-unded-full text-green-600  bg-green-200 ">
                                Open
                            </span>
                            : 
                            <span className="px-2 py-1  text-sm rounded-full text-red-600  bg-red-200 ">
                                Close
                            </span>
                            } 
                            </div>
                        </div>
                        </div>
                    )
                })}
                </div>
            </div> 
        </main>

    </>
  )
}

export default ListJob