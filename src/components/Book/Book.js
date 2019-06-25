import React from 'react';
import './Book.css';

const Book = props => {
  return (
    <div className='book-container'>
      <div className='book '>
        <div className='img'>
          <img src={props.book.cover} />
        </div>
        <div className='book-detail'>
          <h6>{props.book.title}</h6>
          <p>{props.book.publisher}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
