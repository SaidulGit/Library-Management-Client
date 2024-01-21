import React from 'react'

const BorrowCard = ({card,index}) => {
  return (
    <tr>
        <th>{index + 1}</th>
        <td>{card.name1}</td>
        <td className='text-base font-medium'>{card.email}</td>
        <td>{card.date}</td>
        <td><button className="btn text-center font-medium">Return</button></td>
      </tr>
  )
}

export default BorrowCard
