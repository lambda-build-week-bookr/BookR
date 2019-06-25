import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './BookList.css';

import {books} from '../DummyBook/DummyBook';
// import {getBooks} from '../../actions/index';
import Nav from '../Nav/Nav';
import Book from '../Book/Book';
import SearchBox from '../SearchBox/SearchBox';

class BookList extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    // this.props.getBooks();
    this.setState({
      books: books
    });
  }

  render() {
    // console.log(this.props.books);
    return (
      <div>
        <Nav />
        <SearchBox />
        <div className='booklist-container'>
          <h2 className='text-center py-3'>BookList</h2>
          <div className='booklist'>
            {this.state.books.map(book => {
              return <Book book={book} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     books: state.books
//   };
// };

// export default connect(
//   mapStateToProps,
//   {getBooks}
// )(BookList);

export default BookList;
