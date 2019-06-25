import React, {Component} from 'react';
import {connect} from 'react-redux';

import {search} from '../../actions/index';

import './SearchBox.css';

class SearchBox extends Component {
  state = {
    searchItem: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchItem = e => {
    e.preventDefault();
    if (this.state.searchItem.length === 0) return this.props.search('');
    this.props.search(this.state.searchItem);
  };

  render() {
    return (
      <div className='search-box'>
        <form onSubmit={this.searchItem}>
          <input
            type='text'
            placeholder='Search title....'
            value={this.state.searchItem}
            name='searchItem'
            onChange={this.handleChange}
            className='input'
          />
        </form>
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
  {search}
)(SearchBox);
