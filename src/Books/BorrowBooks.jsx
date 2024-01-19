import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BorrowBooks = () => {
  const borrow = useLoaderData()
  console.log(borrow)
  return (
    <div>

    </div>
  )
}

export default BorrowBooks