import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import Description from './components/Description/Description';
import Login from './components/Login/Login';
import BookList from './components/BookList/BookList';
import SignUp from './components/SignUp/SignUp';
import Book from './components/Book/Book';
import Favorite from './components/Favorite/Favorite';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App container'>
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/booklist' component={BookList} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Login} />

        <Route path='/book/:id' component={Description} />
        <Route path='/favorite' component={Favorite} />
      </div>
    </Router>
  );
}

export default App;
