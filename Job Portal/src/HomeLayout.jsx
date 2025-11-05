import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Home/Nav'
import Footer from './components/Home/Footer'


function HomeLayout() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout