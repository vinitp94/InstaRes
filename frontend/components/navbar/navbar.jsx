import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session_modals/session_modal_container';

class NavBar extends React.Component {

  loggedOutNav() {
    return (
      <div className='navbar'>
        <div className='left-half'>
          <Link to={`/`}>
            <img className='logo' src='http://allvectorlogo.com/wp-content/uploads/2016/03/opentable-logo-200x116.png' ></img>
          </Link>
        </div>

        <div className='right-half'>
          <ul>
            <li><SessionModalContainer formType='Log In' buttonLabel='Log In' /></li>
            <li><SessionModalContainer formType='Sign Up' buttonLabel='Sign Up' /></li>
          </ul>
        </div>
      </div>
    );
  }

  // TODO: If on home page, no search container
  // If on another page, location search container should be within nav bar

  loggedInNav() {
    return (
      <div className='navbar'>
        <div className='left-half'>
          <Link to={`/`}>
            <img className='logo' src='http://allvectorlogo.com/wp-content/uploads/2016/03/opentable-logo-200x116.png'></img>
          </Link>
        </div>

        <div className='right-half'>
          <ul>
            <li><Link to={`/`}>Add Restaurant (Broken)</Link></li>
            <li><Link to={`/`}>Profile (Broken)</Link></li>
            <li><Link to={`/`} onClick={ this.props.logout }>Log Out</Link></li>
          </ul>
        </div>
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
