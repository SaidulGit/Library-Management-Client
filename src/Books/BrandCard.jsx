import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({cart}) => {
  const {image,category} = cart || {}
  return (
    <div>
        <div className="card w-96 h-[420px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center grid grid-flow-col ">
    <h2 className="card-title font-medium">{category}</h2>
    <Link to={`/category/${category}`}><button className="btn bg-purple-400 btn-primary text-black">See more</button></Link>
    
  </div>
</div>
    </div>
  )
}

export default BrandCard