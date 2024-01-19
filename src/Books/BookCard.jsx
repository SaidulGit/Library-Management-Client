import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({card}) => {
    
  return (
    <div>
        <div className="card md:w-80 hover:bg-green-200 mb-5 md:h-[400px] bg-base-100 shadow-xl">
  <figure><img src={card.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {card.name}
      <div className="badge badge-secondary">{card.rating}</div>
    </h2>
    <div className="card-actions justify-start">
      <div className="badge badge-outline text-sm font-bold">{card.author}</div>
      <div className="badge badge-outline">{card.category}</div> 
    </div>
  </div>
<Link to={`/update/${card._id}`}>  <button className='btn bg-purple-200 w-full font-bold text-yellow-600'>Update</button></Link>
</div>
    </div>
  )
}

export default BookCard