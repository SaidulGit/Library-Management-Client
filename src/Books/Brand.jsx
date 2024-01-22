import React, { useState } from 'react'
import BrandCard from './BrandCard';

const Brand = () => {

    const [Data,setData] = useState([])


    fetch("https://library-server-seven.vercel.app/brand")
    .then(res=> res.json()
    .then(data => setData(data)))
    
  
  return (
    <div className='mt-4 bg-purple-100'>
    <h2 className='text-center text-4xl font-extrabold mb-4 p-5'>Books Category</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-[1350px] mx-auto'>
            {
                Data.map(cart => <BrandCard key={cart._id} cart={cart}></BrandCard>)
            }
        </div>
    </div>
  )
}

export default Brand