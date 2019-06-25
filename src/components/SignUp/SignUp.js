import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {signup} from '../../actions/index';
import './SignUp.css';

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
      <div className='signup-container container'>
        <form className='form container' onSubmit={this.signup}>
          <h2 className='text-warning'>BookR</h2>

          <input
            type='text'
            onChange={this.handleChange}
            name='email'
            placeholder='Enter email'
            className='input'
            value={this.state.email}
            required
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='username'
            placeholder='Enter username'
            className='input'
            value={this.state.username}
            required
          />
          <input
            type='password'
            onChange={this.handleChange}
            name='password'
            placeholder='Enter password'
            className='input'
            value={this.state.password}
            required
          />
          <button className='btn btn-primary'>Sign up</button>
          <p>
            Already registered?
            <Link to='/login'>
              <span className='account'>Login</span>
            </Link>
          </p>
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
