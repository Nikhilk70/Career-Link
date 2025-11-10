import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/Images/logo-T.png";
import './Home.css'

function Nav() {
  return (
    <div className='navbar'>
        <nav className='flex justify-between px-15 w-full items-center h-[50px] text-amber-50'>
            <div className='w-full flex cursor-pointer'>
                <img className='' src={logo} alt="Not Available" />
                <h1 className='text-3xl font-bold'>Career Link</h1>
            </div>
            <div className='nav-links w-full flex items-center'>
                <div className='nav-search flex gap-5 items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>Find your job here...</span>
                </div>
                <ul className='flex justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav