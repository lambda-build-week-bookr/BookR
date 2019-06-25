import React from 'react';
import './Book.css';

const Book = props => {
  return (
    <div className='book-container'>
      <div className='book '>
        <h5>{props.book.title}</h5>
        <h5>{props.book.publisher}</h5>
        <h5>{props.book.edition}</h5>
      </div>
    </div>
  );
};

export default Book;
