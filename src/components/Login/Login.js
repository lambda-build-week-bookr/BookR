import React, {Component} from 'react';
import {login} from '../../actions/index';
import {connect} from 'react-redux';

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
    this.props.login(this.state);
    this.setState({
      email: '',
      password: ''
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
          <button className='btn'>LogIn</button>
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
