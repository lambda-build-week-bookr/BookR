import React from 'react';
import {connect} from 'react-redux';

import {getSingleBook} from '../../actions/index';
import './Description.css';
import Nav from '../Nav/Nav';
import Review from '../Reviews/Reviews';

class Description extends React.Component {
  componentDidMount() {
    this.props.getSingleBook(this.props.match.params.id);
  }

  render() {
    if (!this.props.book) {
      return <h2>Loading Books...</h2>;
    }
    return (
      <div>
        <Nav />

        <div className='book-container'>
          <div className='single'>
            <div className='img'>
              <img src={this.props.book.thumbnail} />
            </div>
            <div className='title'>
              <h2>{this.props.book.title}</h2>
              <h5>
                Author:
                {this.props.book.authors.map(author => {
                  return author;
                })}
              </h5>

              <h6 className='review'>Review: {this.props.book.totalReviews}</h6>
              <h6>Average rating: {this.props.book.averageRating}</h6>
              <Review />
            </div>
          </div>

          <div className='summary'>
            <h3>Book Summary</h3>
            <p>{this.props.book.description}</p>
            <hr />
          </div>

          <div className='reviews'>
            <h4>Read Reviews</h4>
            {this.props.book.reviews.map(review => {
              return (
                <div className='comment'>
                  {review.review.length > 0 ? (
                    (review.username, review.review)
                  ) : (
                    <h5>Be the first one to write the review</h5>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  {getSingleBook}
)(Description);

//{this.props.book && <p>{this.props.book.title}</p>}
