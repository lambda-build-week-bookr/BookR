import {LOGIN_START, LOGIN_SUCCESS} from '../actions';

export const initialState = {
  books: [],
  loggingIn: false,
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

    default:
      return state;
  }
};
