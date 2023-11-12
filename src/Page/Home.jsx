import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Compoents/Navbar'
import Banner from '../Compoents/Banner'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Outlet></Outlet>
    </div>
  )
}

export default Home