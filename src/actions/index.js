import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = state => dispatch => {
  dispatch({type: LOGIN_START});
  return axios
    .post('https://api-bookr.herokuapp.com/api/auth/login', state)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch();
};
