import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getBooks} from '../../actions/index';
import Book from '../Book/Book';

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    console.log(this.props.books);
    return (
      <div>
        {this.props.books.map(book => {
          return <Book book={book} />;
        })}
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
