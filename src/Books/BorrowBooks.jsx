import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BorrowCard from './BorrowCard'

const BorrowBooks = () => {
  const borrow = useLoaderData()
  const [loadBooks,setLoadBooks] = useState(borrow)
  
  return (
    <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Category</th>
        <th>Email</th>
        <th>Return date</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
     {
      loadBooks.map((cart ,index) => <BorrowCard setLoadBooks={setLoadBooks} loadBooks={loadBooks} key={cart._id} index={index} card={cart}></BorrowCard>)
     }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BorrowBooks