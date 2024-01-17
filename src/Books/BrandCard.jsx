import React from 'react'

const BrandCard = ({cart}) => {
  return (
    <div>
        <div className="card w-96 h-[420px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cart.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center grid grid-flow-col ">
    <h2 className="card-title font-medium">{cart.category}</h2>
    <button className="btn bg-purple-400 btn-primary text-black">See more</button>
    
  </div>
</div>
    </div>
  )
}

export default BrandCard