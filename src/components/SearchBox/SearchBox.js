import React, {Component} from 'react';

import './SearchBox.css';

class SearchBox extends Component {
  state = {
    searchItem: ''
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.props.searchBox(this.state.searchItem);
      }
    );
  };

  render() {
    return (
      <div className='search-box'>
        <form>
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

export default SearchBox;
