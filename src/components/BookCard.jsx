import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
        <h2>{book.title}</h2>
        <h3><span>Author : </span>{book.author}</h3>
        <h3><span>Genre : </span>{book.genre}</h3>
        <h3><span>Publisher : </span>{book.publisher}</h3>
        <h3><span>Price: </span>{book.price}</h3>
    </div>
  )
}

export default BookCard