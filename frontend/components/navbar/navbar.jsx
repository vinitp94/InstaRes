import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session_modals/session_modal_container';

class NavBar extends React.Component {

  loggedOutNav() {
    return (
      <div className='navbar'>
        <Link to={`/`}>
          <img src='http://allvectorlogo.com/wp-content/uploads/2016/03/opentable-logo-200x116.png'></img>
        </Link>

        <SessionModalContainer formType='Log In' buttonLabel='Log In' />
        <SessionModalContainer formType='Sign Up' buttonLabel='Sign Up' />
      </div>
    );
  }

  // TODO: If on home page, no search container
  // If on another page, location search container should be within nav bar

  loggedInNav() {
    return (
      <div className='navbar'>
        <Link to={`/`}>
          <img src='http://allvectorlogo.com/wp-content/uploads/2016/03/opentable-logo-200x116.png'></img>
        </Link>
        <Link to={`/`}>Add Restaurant (Broken)</Link>
        <Link to={`/`}>Profile (Broken)</Link>
        <Link to={`/`} onClick={ this.props.logout }>Log Out</Link>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.loggedInNav();
    } else {
      return this.loggedOutNav();
    }
  }
}

export default NavBar;
