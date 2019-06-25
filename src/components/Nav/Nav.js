import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {logout} from '../../actions/index';

const Nav = props => {
  return (
    <div>
      <Link onClick={() => props.logout()} to='/login'>
        Logout
      </Link>
      <Link to='/booklist'>Home</Link>
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
