import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const login = creds => dispatch => {
  dispatch({type: FETCH_START});
  return axios
    .post('https://api-bookr.herokuapp.com/api/auth/login', creds)
    .then(res => console.log(res))
    .catch();
};
