import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CaategoryCard from './CaategoryCard';

const CategoryBooks = () => {
  const loader = useLoaderData();
  const {category } = loader[0]

  return (
    <div>
      <h2 className='text-4xl text-center font-bold'><span className='text-yellow-400'>{category}</span> Books here</h2>
     <div className='grid md:grid-cols-3 grid-cols-1 gap-4 w-[1350px] mx-auto mt-5'>
      {
        loader.map(cart => <CaategoryCard key={cart._id} cart={cart}></CaategoryCard>)
      }
     </div>
    </div>
  )
}

export default CategoryBooks