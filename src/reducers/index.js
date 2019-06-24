import {LOGIN_START, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_SUCCESS} from '../actions';

export const initialState = {
  books: [],
  user: [],
  loggingIn: false,
  signingUp: false,
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

    default:
      return state;
  }
};
