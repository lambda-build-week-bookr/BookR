import React, {Component} from 'react';
// import {connect} from 'react-redux';

import {books} from '../DummyBook/DummyBook';
// import {getBooks} from '../../actions/index';
import Nav from '../Nav/Nav';
import Book from '../Book/Book';

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
        {this.state.books.map(book => {
          return <Book book={book} />;
        })}
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
