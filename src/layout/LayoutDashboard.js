import React from 'react'
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const LayoutDashboard = (props) => {
  return (
    <>
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div className="flex items-start justify-between">
        <Sidebar/>
        {/* Navbar */}
        <div className="flex flex-col w-full md:space-y-4">
        <NavbarUser/>
            {/* Body Content */}
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                {props.children}                
            </div>
        </div>
    </div>
</main>
<Footer/>
   
    
       
    
    </>
  )
}

export default LayoutDashboard