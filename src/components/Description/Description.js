import React from 'react';
import {connect} from 'react-redux';
import {getSingleBook} from '../../actions/index';

class Description extends React.Component {
  componentDidMount() {
    this.props.getSingleBook(this.props.match.params.id);
  }

  render() {
    return <div>{this.props.book && <p>{this.props.book.title}</p>}</div>;
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  };
};

export default connect(
  mapStateToProps,
  {getSingleBook}
)(Description);
