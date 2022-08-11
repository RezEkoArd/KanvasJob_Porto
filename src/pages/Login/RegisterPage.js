import axios from 'axios';
import React from 'react';
import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';


const RegisterPage = () => {

const navigate = useNavigate();
const {
    handleInputAuth,
    inputAuth, setInputAuth
}
    = useContext(GlobalContext)

const handleSubmit = (event) => {
    event.preventDefault()
    
    let {
        name,
        image_url,
        email,
        password 
    } = inputAuth

    axios.post(`https://dev-example.sanbercloud.com/api/register`,{
        name,
        image_url,
        email,
        password 
    })
    .then((res) => {
        navigate('/Login')
    })

}

// Password Toogle Visibility
const [passwordType, setPasswordType] = useState("password")




const TooglePassword = () => {
    if(passwordType==="password"){
        setPasswordType("text")
        return
    }
    setPasswordType("password")
}


  return (
    <>
    <form onSubmit={handleSubmit}  className='w-1/2 mx-auto h-screen'>
        <h1 className='text-xl font-bold text-center mb-5'>Daftar</h1>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>

          </div>
          <input type="text" onChange={handleInputAuth} value={inputAuth.name} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Budi Bayhaki" required/>
        </div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo Profile</label>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
          </div>
          <input type="text" onChange={handleInputAuth} name='image_url' value={inputAuth.image_url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://media.istockphoto.com" required />
        </div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>

          </div>
          <input type="text" onChange={handleInputAuth} name='email' value={inputAuth.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
        </div>
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    
          </span>
          <input type={passwordType} onChange={handleInputAuth} value={inputAuth.password} name='password' className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" minlength="8" required />
        </div>
        <div className="flex items-center mt-3 mb-4">
            <input id="default-checkbox" type="checkbox" onClick={TooglePassword} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">See Password</label>
            </div>


        <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-5">Submit</button>
      </form>
    </>
  )
}

export default RegisterPage