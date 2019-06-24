import React, {Component} from 'react';
import {login} from '../../actions/index';
import {connect} from 'react-redux';

class Login extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      ...this.state.credentials,
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials);
    this.setState({
      credentials: {
        email: '',
        password: ''
      }
    });
  };

  render() {
    return (
      <div className='login-container'>
        <form className='form' onSubmit={this.login}>
          <input
            type='text'
            onChange={this.handleChange}
            name='email'
            placeholder='Enter email'
            className='input'
            value={this.state.credentials.username}
          />
          <input
            type='password'
            onChange={this.handleChange}
            name='password'
            placeholder='Enter password'
            className='input'
            value={this.state.credentials.password}
          />
          <button className='btn'>Sign In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logginIn: state.logginIn
  };
};

export default connect(
  mapStateToProps,
  {login}
)(Login);
