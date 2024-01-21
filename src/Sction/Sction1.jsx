import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { CiGift } from "react-icons/ci";

const Sction1 = () => {
  return (
    <div>
        <h2 className='text-6xl font-bold text-center mt-10'>Terms</h2>
        <div className='border-2 rounded-lg bg-purple-100 text-pink-400 border-amber-500 mt-10 p-9 flex  justify-center gap-10 ' >
         <div className='relative'>
            <p className='p-5 rounded-lg  border-lime-400 border-2 mt-4 text-4xl font-bold'><span className='text-yellow-400'>Borrow </span> books easyly by one tap </p>
            <p  className='absolute -right-8 top-0 text-6xl text-purple-500' ><IoBookSharp /></p>
            </div>


         <div className='relative'>
            <p className='p-5 rounded-lg border-green-500 border-2 text-4xl font-bold mt-4 '><span className='text-yellow-400'>Return</span> book and get reward </p>
              <p className='absolute text-6xl -right-7 -top-2 text-green-600'><CiGift /></p>
            </div>
        </div>
    </div>
  )
}

export default Sction1