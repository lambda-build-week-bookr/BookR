import React, {Component} from 'react';

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
          <button className='btn'>Sign In</button>
        </form>
      </div>
    );
  }
}

export default Login;
