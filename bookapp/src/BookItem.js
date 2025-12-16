import React from 'react'

const BookItem = ({title,author}) => {
  return (
    <li>
        <strong>{title} </strong>by {author}
    </li>
  );
}

export default BookItem