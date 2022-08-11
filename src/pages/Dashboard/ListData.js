import React from 'react';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../context/GlobalContext';




const ListData = () => {
  let navigate = useNavigate();
 
  const {
    fetchStatus,
    setFecthStatus,
    setInput,
    setCurrentId}
    = useContext(GlobalContext)
  
  const [data,setData] = useState(null);

  useEffect(() => {  
    if (fetchStatus === true){
      axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
          setData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

      setFecthStatus(false)
    }
  },[fetchStatus,
    setFecthStatus])


const handleDelete = (event) => {
  let idData = parseInt(event.target.value)
  
  axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
  {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
  .then((res) => {
    setFecthStatus(true)
  })
}

const handleEdit = (event) => {
  let idData = parseInt(event.target.value)
  
  setCurrentId(idData)
  axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData} `)
  .then((res) => {
    
    let data = res.data

    setInput(
      {
        title: data.title,
        job_description: data.job_description,
        job_qualification: data.job_qualification,
        job_type: data.job_type,
        job_tenure: data.job_tenure,
        job_status: data.job_status,
        company_name: data.company_name,
        company_image_url: data.company_image_url,
        company_city: data.company_city,
        salary_min: data.salary_min,
        salary_max: data.salary_max
      }
    )
  navigate('/dashboard/list-job-vacancy/form')


  })
}

  return (
    <>
    
    <div className='w-full justify-left align-left'>
        <Link to={'/dashboard/list-job-vacancy/form'}>
          <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create Data</button>
        </Link>
    </div>
    <div className="overflow-x-auto overflow-y-auto relative shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-3">
          No
        </th>
        <th scope="col" className="py-3 px-3">
          Title
        </th>
        <th scope="col" className="py-3 px-3">
          JobDesc
        </th>
        <th scope="col" className="py-3 px-3">
          Job qualification
        </th>
        <th scope="col" className="py-3 px-3">
          Job Tenure
        </th>
        <th scope="col" className="py-3 px-3">
          Job Status
        </th>
        <th scope="col" className="py-3 px-3">
          Company Name
        </th>
        <th scope="col" className="py-3 px-3">
          Company Img Url
        </th>
        <th scope="col" className="py-3 px-6">
          Company City
        </th>
        <th scope="col" className="py-3 px-6">
          Salary Min
        </th>
        <th scope="col" className="py-3 px-6">
          Salary Max
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {data !== null && data.map((res,index) => {
        return (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index} >
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {index + 1}
        </th>
        <td className="py-4 px-3">
          {res.title}
        </td>
        <td className="py-4 px-3">
          {res.job_description}
        </td>
        <td className="py-4 px-3">
          {res.job_qualification}
        </td>
        <td className="py-4 px-3">
          {res.job_tenure}
        </td>
        <td className="py-4 px-3">
          {res.job_status}
        </td>
        <td className="py-4 px-3">
          {res.company_name}
        </td>
        <td className="py-4 px-3">
          <img src={res.company_image_url} alt={res.title} />
        </td>
        <td className="py-4 px-3">
          {res.company_city}
        </td>
        <td className="py-4 px-3">
          {res.salary_min}
        </td>
        <td className="py-4 px-3">
          {res.salary_max}
        </td>
        <td className="py-4 px-3">
          <button value={res.id} onClick={handleEdit}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
          <br/>
          <button value={res.id} onClick={handleDelete} className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
      </tr>

        )
      })}
 
    </tbody>
  </table>
</div>
</>
  )
}

export default ListData