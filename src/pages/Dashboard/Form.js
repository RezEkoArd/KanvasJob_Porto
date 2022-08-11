import React, { useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Form = () => {
    let navigate = useNavigate();
    const {
        setFecthStatus,
        input, setInput,
        currentId, setCurrentId,
        handleInput
    }
        = useContext(GlobalContext)


   
        const handleSubmit = (event) => {
            event.preventDefault()
    
            let {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            } = input
    
            if (currentId === -1 ){

                axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
                },
                {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
                )
                .then((res) =>{
                    setFecthStatus(true)
                } )
            } else {
                axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,{
                    title,
                    job_description,
                    job_qualification,
                    job_type,
                    job_tenure,
                    job_status,
                    company_name,
                    company_image_url,
                    company_city,
                    salary_min,
                    salary_max  
                },
                {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
                )
                .then((res) => {
                    setFecthStatus(true)
                })
            }
            setCurrentId(-1)

            
    
            setInput({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: "",
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: ""
            })
            navigate('/dashboard/list-job-vacancy')
        }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input type="text" value={input.title} onChange={handleInput} name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='frontend dev' required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">JobDesc</label>
            <input type="text" onChange={handleInput} name='job_description' value={input.job_description}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job qualification</label>
            <input type="text" onChange={handleInput} name='job_qualification' value={input.job_qualification} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label>
            <input type="text" name='job_type' onChange={handleInput} value={input.job_type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full-time" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Tenure</label>
            <input type="text" name='job_tenure' onChange={handleInput} value={input.job_tenure} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="On-SIte" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Status</label>
            <input type="number" name='job_status' onChange={handleInput}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1"  max="1" min="0" defaultValue="1" required/>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
            <input type="text" name='company_name' onChange={handleInput} value={input.company_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PT. Mencari Cinta Sejati" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Img Url</label>
            <input type="text" name='company_image_url' onChange={handleInput} value={input.company_image_url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://png.pngtree.com" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company City</label>
            <input type="text" name='company_city' onChange={handleInput} value={input.company_city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='jakarta' required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Min</label>
            <input type="number" name='salary_min' onChange={handleInput} value={input.salary_min} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Max</label>
            <input type="number" name='salary_max' onChange={handleInput} value={input.salary_max} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    </>
  )
}

export default Form