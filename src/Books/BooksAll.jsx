import React, { useState } from 'react'
import BookCard from './BookCard'


const BooksAll = () => {
  const [book,setBook] = useState([])
 fetch("http://localhost:5000/allbooks")
 .then(res => res.json())
 .then(data=> setBook(data))

  return (
    <div> 
      <h2 className='text-center text-4xl font-bold mb-10'>All Books Show here</h2>
       <div className='grid grid-cols-1 md:grid-cols-4 gap-2 m-5'>
        {
          book.map(cart => <BookCard key={cart._id} card={cart}></BookCard>)
        }
       </div>
       
    </div>
  )
}

export default BooksAll;