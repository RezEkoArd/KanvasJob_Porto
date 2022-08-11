import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const LoginPage = () => {
  let navigate = useNavigate();

  let {
    inputAuth, setInputAuth
  }  = useContext(GlobalContext)
  
  // const [input, setInput] = useState({
  //   email: "",
  //   password: ""
  // })

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
  
    setInputAuth({...inputAuth, [name] : value})
  }

  const handleLogin = (event) => {
    event.preventDefault()

    let {email, password} = inputAuth

    axios.post(`https://dev-example.sanbercloud.com/api/login`, {email, password})
    .then((res) => {
      let {token} = res.data
      Cookies.set('token', token)
      navigate('/dashboard/list-job-vacancy')

    })

  }

  return (
    <>
      <form onSubmit={handleLogin} className='w-1/2 mx-auto h-screen'>
        <h1 className='text-xl font-bold text-center mb-5'>Login</h1>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          </div>
          <input onChange={handleChange} type="text" name='email' value={inputAuth.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
        </div>
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    
          </span>
          <input onChange={handleChange} type="password" name='password' value={inputAuth.password} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-5">Submit</button>
      </form>
      

    </>
  )
}

export default LoginPage