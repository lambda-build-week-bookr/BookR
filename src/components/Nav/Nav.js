import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {logout} from '../../actions/index';
import './Navigation.css';

const Nav = props => {
  return (
    <div className='navigation'>
      <Link className='home' to='/booklist'>
        Home
      </Link>
      <Link className='home' to='/favorite'>
        Favorite
      </Link>
      <Link className='home' onClick={() => props.logout()} to='/login'>
        Logout
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logginOut: state.logginOut,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  {logout}
)(Nav);
