import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BookList.css';

import {getBooks} from '../../actions/index';
import Nav from '../Nav/Nav';
import Book from '../Book/Book';
import SearchBox from '../SearchBox/SearchBox';
import Favorite from '../Favorite/Favorite';

class BookList extends Component {
  state = {
    searchData: []
  };

  componentDidMount() {
    this.props.getBooks();
  }

  searchBook = search => {
    // if(typeof(search === "number"))
    let filtered = this.props.books.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase()) || book.isbn.includes(search);
    });

    this.setState({
      searchData: filtered
    });
    console.log('search.lenght====> ', search.length);
    if (search.length <= 0) {
      console.log('length 0 ');
      this.setState({
        searchData: this.props.books
      });
    }
  };

  render() {
    const bookData = this.state.searchData.length > 0 ? this.state.searchData : this.props.books;
    console.log(this.props.loading, 'Getting books....');
    return (
      <div>
        <Nav />
        <SearchBox searchBox={this.searchBook} />
        <div className='booklist-container'>
          <h2 className='text-center py-3'>BookList</h2>
          {this.props.loading ? <h1>Loading....</h1> : null}
          <div className='booklist'>
            {bookData.map(book => {
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
    books: state.books,
    loading: state.gettingBook
  };
};

export default connect(
  mapStateToProps,
  {getBooks}
)(BookList);
