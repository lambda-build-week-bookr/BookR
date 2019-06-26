import React, {Component} from 'react';

class Reviews extends Component {
  state = {
    comment: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    this.props.addReview(this.state, this.props.match.params.id);
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
                <form onSubmit={this.addReview}>
                  <input
                    type='text'
                    placeholder='comment...'
                    onChange={this.handleChange}
                    name='comment'
                  />
                </form>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-dismiss='modal'>
                  Close
                </button>
                <button type='button' class='btn btn-primary'>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
