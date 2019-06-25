import React, {Component} from 'react';
import {login} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/booklist'));
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div className='login-container'>
        <form className='form container' onSubmit={this.login}>
          <h2 className='text-warning'>BookR</h2>

          <input
            type='text'
            onChange={this.handleChange}
            name='email'
            placeholder='Enter email'
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
          <button className='btn btn-primary'>LogIn</button>

          <p>
            Not registered?
            <Link to='/signup'>
              {' '}
              <span className='account'>Create an account</span>{' '}
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({loggingIn}) => {
  return {
    loggingIn: loggingIn
  };
};

export default connect(
  mapStateToProps,
  {login}
)(Login);
