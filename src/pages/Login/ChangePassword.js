import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ChangePassword = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState({
    current_password : "",
    new_password : "",
    confirmPassword : ""
  })

const handleInput = (event) => {
  let name = event.target.name
  let value = event.target.value

  if(name === "current_password"){
    setInput( {...input, current_password: value})
  } else if (name === "new_password"){
    setInput ({...input, new_password: value})
  }  else if (name === "confirmPassword"){
    setInput ({...input, confirmPassword: value})
  }
}

const handleChangePassword = (event) => {
event.preventDefault()

let {
  current_password,
  new_password,
  confirmPassword
} = input

if (new_password === confirmPassword){
  
  axios.post(`https://dev-example.sanbercloud.com/api/change-password`, {
    current_password,
    new_password,
  },
  {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
  )
  .then((res) => {
    navigate('/dashboard/list-job-vacancy')
  })
  .catch((err) => {
    console.log(err)
    alert(err)
  })

}

}

  return (
    <>
    <form onSubmit={handleChangePassword}>
      <div className="mb-6 mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
        <input type="password" onChange={handleInput} name="current_password" value={input.current_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
      </div> 
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New password</label>
        <input type="password" onChange={handleInput} name="new_password" value={input.new_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
      </div> 
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input type="password" onChange={handleInput} name="confirmPassword" value={input.confirmPassword} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
      </div> 
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  )
}

export default ChangePassword