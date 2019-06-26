import React from 'react';
import './Book.css';
import {Link} from 'react-router-dom';

const Book = props => {
  return (
    <div className='book-container'>
      <div className='book '>
        <div className='img'>
          <Link to={`/book/${props.book.id}`}>
            <img src={props.book.cover} />
          </Link>
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
