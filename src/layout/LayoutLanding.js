import React from 'react'
import Header from '../components/Header';
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import Cookies from 'js-cookie';

const LayoutLanding = (props) => {
  return (
    <>
    {!Cookies.get('token') && <Header/>}
    {Cookies.get('token') && <NavbarUser/>}
    
        {props.children}
    <Footer/>
    </>
  )
}

export default LayoutLanding