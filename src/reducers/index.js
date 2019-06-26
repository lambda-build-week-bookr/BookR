import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  GET_START,
  GET_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  GET_ERROR,
  LOGOUT,
  SEARCH,
  GET_SUCCESSBOOK,
  GET_ERRORBOOK,
  GET_STARTBOOK
} from '../actions';

export const initialState = {
  books: [],
  user: [],
  loggingIn: false,
  signingUp: false,
  gettingBook: false,
  error: '',
  token: localStorage.getItem('token'),
  Logout: false,
  book: null
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
      console.log(state);
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
    case LOGOUT:
      console.log(state.token);
      return {
        ...state,
        logout: true,
        token: localStorage.clear()
      };

    case SEARCH:
      console.log(state.books);
      return {
        ...state,
        books: state.books.filter(book =>
          action.payload.toLowerCase().includes(book.title.toLowerCase())
        )
      };
    case GET_STARTBOOK:
      return {
        ...state,
        getttingBook: true
      };

    case GET_ERRORBOOK:
      return {
        ...state,
        getttingBook: false
      };
    case GET_SUCCESSBOOK:
      return {
        ...state,
        book: action.payload,
        gettingBook: false
      };

    default:
      return state;
  }
};
