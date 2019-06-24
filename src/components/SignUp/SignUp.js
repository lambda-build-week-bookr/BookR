import React, {Component} from 'react';
import {connect} from 'react-redux';

import {signup} from '../../actions/index';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signup = event => {
    event.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/login'));

    this.setState({
      email: '',
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <div className='signup-container'>
        <form className='form' onSubmit={this.signup}>
          <input
            type='text'
            onChange={this.handleChange}
            name='email'
            placeholder='Enter email'
            className='input'
            value={this.state.email}
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='username'
            placeholder='Enter username'
            className='input'
            value={this.state.username}
          />
          <input
            type='password'
            onChange={this.handleChange}
            name='password'
            placeholder='Enter password'
            className='input'
            value={this.state.password}
          />
          <button className='btn'>signup</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
  return {
    users
  };
};

export default connect(
  mapStateToProps,
  {signup}
)(SignUp);
