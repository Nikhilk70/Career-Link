import React from 'react'
import './Home.css'
import Logos from './Logos'

function Header() {
  return (
    <div className='homeHeader flex flex-col h-[100dvh] justify-center'>
      <div className='mainHeader'>
        <h3 className='first'>Find Your</h3>
        <h1>Dream Job</h1>
        <h3 className='second'>or the Perfect Hire</h3>
        <h3 className='third'>All in One Place</h3>
      </div>
      <div className='secondHeader'>
        <p>Discover thousands of job opportunities, connect with top employers, 
          and take the next step in your career. Whether you’re hiring or job hunting, HireHub helps you get there faster.</p>
      </div>
      <div className='buttonHeader flex gap-5 px-2'>
        <button className='find'>Find Jobs</button>
        <button className='post'>Post a Job</button>
      </div>
      <Logos />
    </div>
  )
}

export default Header