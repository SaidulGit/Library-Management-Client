import React from 'react'
import Banner from '../Compoents/Banner'
import Brand from '../Books/Brand'
import Review from '../Reviews/Review'
import Sction1 from '../Sction/Sction1'
import Sction2 from '../Sction/Sction2'


const Home = () => {
  return (
    <div className='w-11/12 mx-auto '>
        <Banner></Banner>
        <Brand></Brand>
        <Sction1></Sction1>
        <Sction2></Sction2>
    </div>
  )
}

export default Home