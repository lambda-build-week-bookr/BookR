import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BookList.css';

import {getBooks} from '../../actions/index';
import Nav from '../Nav/Nav';
import Book from '../Book/Book';
import SearchBox from '../SearchBox/SearchBox';

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    console.log(this.props.books);
    return (
      <div>
        <Nav />
        <SearchBox />
        <div className='booklist-container'>
          <h2 className='text-center py-3'>BookList</h2>
          <div className='booklist'>
            {this.props.books.map(book => {
              return <Book book={book} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  {getBooks}
)(BookList);
