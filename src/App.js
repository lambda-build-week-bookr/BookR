import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import Login from './components/Login/Login';
import BookList from './components/BookList/BookList';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App container'>
        <BookList />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute path='/booklist' component={BookList} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  );
}

export default App;
