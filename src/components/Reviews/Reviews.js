import React, {Component} from 'react';
import ReactStars from 'react-stars';

class Reviews extends Component {
  state = {
    review: '',
    rating: 0
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  onChangeHandler = rating => {
    this.setState({
      ...this.state,
      rating: rating
    });
  };

  addComment = e => {
    console.log(this.props);
    e.preventDefault();
    this.props.addReview(this.state, this.props.bookId);
  };
  render() {
    return (
      <div>
        <button
          type='button'
          class='btn btn-primary'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add Review
        </button>
        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Modal title
                </h5>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>
                <form onSubmit={this.addComment}>
                  <input
                    type='text'
                    placeholder='comment...'
                    onChange={this.handleChange}
                    name='review'
                  />
                  <ReactStars onChange={this.onChangeHandler} count={5} value={this.state.rating} />
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>
                      Close
                    </button>
                    <button class='btn btn-primary'>Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
