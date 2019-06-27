import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import jwtDecode from 'jwt-decode';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_ERROR = 'GET_ERROR';

export const GET_STARTBOOK = 'GET_STARTBOOK';
export const GET_SUCCESSBOOK = 'GET_SUCCESSBOOK';
export const GET_ERRORBOOK = 'GET_ERRORBOOK';

export const LOGOUT = 'LOGOUT';
export const FAVORITE = 'FAVORITE';

export const REVIEW_START = 'REVIEW_START';
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS';
export const REVIEW_ERROR = 'REVIEW_ERROR';

export const login = state => dispatch => {
  dispatch({type: LOGIN_START});
  return axiosWithAuth()
    .post('https://api-bookr.herokuapp.com/api/auth/login', state)
    .then(res => {
      const userInfo = jwtDecode(res.data.user.token);
      console.log(userInfo);
      console.log(res);
      localStorage.setItem('token', res.data.user.token);
      dispatch({type: LOGIN_SUCCESS, payload: userInfo});
    })
    .catch(err => console.log(err.response));
};

export const signup = state => dispatch => {
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
      console.log(res.data);
      dispatch({type: GET_SUCCESS, payload: res.data.books});
    })
    .catch(err => ({type: GET_ERROR, payload: err.response}));
};

export const getSingleBook = id => dispatch => {
  dispatch({type: GET_STARTBOOK});
  return axiosWithAuth()
    .get(`https://api-bookr.herokuapp.com/api/books/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({type: GET_SUCCESSBOOK, payload: res.data.book});
    })
    .catch(err => ({type: GET_ERRORBOOK, payload: err.response}));
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const favorite = id => {
  console.log(id);
  return {
    type: FAVORITE,
    payload: id
  };
};

export const addReview = (review, id) => dispatch => {
  console.log(review, id);
  dispatch({type: REVIEW_START});
  return axiosWithAuth()
    .post(`https://api-bookr.herokuapp.com/api/reviews/${id}`, review)
    .then(res => {
      console.log('NO ERRORRRRR');
      console.log('LOOk for this ====> ', res.data.review, res.data, res.data.content);
      dispatch({
        type: REVIEW_SUCCESS,
        payload: {
          rating: res.data.review.rating,
          review: res.data.review.content
        }
      });
    })
    .catch(err => {
      console.log('ERROORRRRR', err);
      dispatch({type: REVIEW_ERROR, payload: err.response});
    });
};
