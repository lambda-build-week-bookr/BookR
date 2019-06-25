import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  GET_START,
  GET_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  GET_ERROR
} from '../actions';

export const initialState = {
  books: [],
  user: [],
  loggingIn: false,
  signingUp: false,
  gettingBook: false,
  error: '',
  token: localStorage.getItem('token')
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        err: action.payload
      };

    case SIGNUP_START:
      return {
        ...state,
        signingUp: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        singingUp: false,
        token: action.payload
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        err: action.payload
      };

    case GET_START:
      return {
        ...state,
        gettingBook: true
      };
    case GET_SUCCESS:
      return {
        ...state,
        gettingBooks: false,
        books: action.payload
      };
    case GET_ERROR:
      return {
        ...state,
        gettingBooks: false,
        err: action.payload
      };
    default:
      return state;
  }
};
