import React from 'react'
import { Link } from 'react-router-dom'

const CaategoryCard = ({cart}) => {
 const {name,category,image,rating,author} = cart || {}
  return (
    <div>
    <div className="card md:w-80 hover:bg-yellow-300 mb-5 md:h-[400px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <div className="card-actions justify-start">
      <div className="badge badge-outline text-sm font-bold">{author}</div>
      <div className="badge badge-outline">{category}</div> 
    </div>
  </div>
<Link to={`/details/${name}`}>  <button className='btn bg-purple-200 font-bold w-full text-yellow-600'> Details</button></Link>
</div>
    </div>
  )
}

export default CaategoryCard