import React, {Component} from 'react';
import './Favorite.css';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';

class Favorite extends Component {
  render() {
    console.log(this.props.favorite);
    return (
      <div className='container'>
        <Nav />
        <div className='favorite'>
          <h1>My Favorite List</h1>
          <div className='fav-books'>
            {this.props.favorite.map(fav => {
              return (
                <div class='items'>
                  <div className='item'>
                    <div className='pic'>
                      <img src={fav.cover} />
                    </div>
                    <div className='Btitle'>
                      <h6 className='name'>{fav.title}</h6>

                      <p className='review'>Review: {fav.totalReviews}</p>
                      <p>Average rating: {fav.averageRating}</p>
                    </div>
                  </div>
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
    favorite: state.favorite
  };
};

export default connect(
  mapStateToProps,
  {}
)(Favorite);
