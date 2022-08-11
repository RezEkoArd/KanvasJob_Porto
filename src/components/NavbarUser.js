import React from 'react';
import { Navbar,Dropdown,Avatar } from 'flowbite-react';
import {  useNavigate , Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const NavbarUser = () => {
  let navigate = useNavigate()
  let {
    inputAuth
  }  = useContext(GlobalContext)
  
  return (
    <>
        <Navbar
  fluid={true}
  rounded={true}
>
  
  <div className="flex md:order-2 z-50">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="../assets/user.png" rounded={true}/>}

    >
      <Dropdown.Header >
        <span className="block truncate text-sm font-medium">
          {inputAuth.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        <Link to={'/dashboard/list-job-vacancy'}> Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={'/changepass'}>
        Change Password
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <span onClick={() => {
          Cookies.remove('token')
          navigate('/login')
        }}>
        Sign out
        </span>
        
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"    >
      <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">KanvasJobs</span>
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>
    </>

  )
}

export default NavbarUser