import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { IoMdReturnRight } from "react-icons/io";

const BorrowCard = ({card,index,setLoadBooks,loadBooks}) => {
const {_id} = card

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Want to Return!"
  })
  
  .then((result) => {
    fetch(`http://localhost:5000/borrowdata/${id}`,{
    method:"DELETE"
  })
  .then(res=> res.json())
  .then(data=> {
   console.log(data)
   const storeId = loadBooks.filter(ids => ids._id !== id);
      setLoadBooks(storeId);
  })
    if (result.isConfirmed) {
      Swal.fire({
        title: "Returned!",
        text: "This Book has been return.",
        icon: "success"
      });
    }
  });
  // console.log(borrow)
}
// console.log(borrow)
  return (
    <tr>
        <th>{index + 1}</th>
        <td>{card.name1}</td>
        <td>{card.category}</td>
        <td className='text-base font-medium'>{card.email}</td>
        <td>{card.date}</td>
        <td><button onClick={()=>handleDelete(_id)} className="btn text-center font-medium bg-orange-200"><IoMdReturnRight /> Return</button></td>
      </tr>
  )
}

export default BorrowCard
