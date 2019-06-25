import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_ERROR = 'GET_ERROR';

export const login = state => dispatch => {
  dispatch({type: LOGIN_START});
  return axiosWithAuth()
    .post('https://api-bookr.herokuapp.com/api/auth/login', state)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.user.token);
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
      localStorage.setItem('token', res.data.user.token);

      dispatch({type: SIGNUP_SUCCESS, payload: res.data.user.token});
    })
    .catch(err => console.log(err.response));
};

export const getBooks = () => dispatch => {
  dispatch({type: GET_START});
  return axiosWithAuth()
    .get('https://api-bookr.herokuapp.com/api/books')
    .then(res => {
      console.log(res);
      dispatch({type: GET_SUCCESS, payload: res.data.books});
    })
    .catch(err => ({type: GET_ERROR, payload: err.response}));
};
