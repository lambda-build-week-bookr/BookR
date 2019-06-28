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
  GET_SUCCESSBOOK,
  GET_ERRORBOOK,
  GET_STARTBOOK,
  FAVORITE,
  REVIEW_START,
  REVIEW_SUCCESS,
  REVIEW_ERROR
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
  book: null,
  favorite: [],
  review: [],
  postingReview: false,
  username: '',
  itemList: []
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
        username: action.payload.username
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
        gettingBook: false,
        books: action.payload
      };
    case GET_ERROR:
      return {
        ...state,
        gettingBook: false,
        err: action.payload
      };
    case LOGOUT:
      console.log(state.token);
      return {
        ...state,
        logout: true,
        token: localStorage.clear()
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

    case FAVORITE:
      const fav = state.books.filter(book => book.id === action.payload);

      // localStorage.setItem('favorite', JSON.stringify(state.favorite));

      return {
        ...state,
        favorite: state.favorite.concat(fav)
        // itemList: localStorage.getItem('favorite')
      };

    case REVIEW_START:
      return {
        ...state,
        postingReview: true
      };
    case REVIEW_SUCCESS:
      console.log('action payload==> ', action.payload);
      console.log('state Array ===> ', [
        ...state.book.reviews,
        {...action.payload, username: state.username}
      ]);
      return {
        ...state,
        book: {
          ...state.book,
          reviews: [...state.book.reviews.concat({...action.payload, username: state.username})]
        },
        postingReview: false
      };
    case REVIEW_ERROR:
      return {
        ...state,
        postingReview: false
      };

    default:
      return state;
  }
};
