import React from 'react';
import './Book.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {favorite} from '../../actions/index';

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
          <p>ISBN: {props.book.isbn}</p>
          <button onClick={() => props.favorite(props.book.id)} type='button' class='btn-danger'>
            Add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  {favorite}
)(Book);
