import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main