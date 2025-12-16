import React from 'react'
import Header from './Header';
import BookItem from './BookItem';
const BookList = () => {
    const books=[{title:'Happy',author:'Booma'},{title:'Sad',author:'Yogesh'}];
  return (
    <div>
        <Header/>
        <ul>
            {books.map((book,index)=>(
                <BookItem key={index} title={book.title} author={book.author}/>
            ))}
        </ul>
    </div>
  );
}

export default BookList