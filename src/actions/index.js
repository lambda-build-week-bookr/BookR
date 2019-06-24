import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const login = state => dispatch => {
  dispatch({type: LOGIN_START});
  return axios
    .post('https://api-bookr.herokuapp.com/api/auth/login', state)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch(err => console.log(err.response));
};

export const signup = state => dispatch => {
  console.log(state);
  dispatch({type: SIGNUP_START});
  return axios
    .post('https://api-bookr.herokuapp.com/api/auth/register', state)
    .then(res => {
      console.log(res);
      dispatch({type: SIGNUP_SUCCESS, payload: res.data});
    })
    .catch(err => console.log(err.response));
};
