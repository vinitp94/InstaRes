import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session_modals/session_modal_container';

class NavBar extends React.Component {
  loggedOutNav() {
    return (
      <div className='navbar'>
        <div className='left-half'>
          <Link to={`/`}>
            <img className='logo' src='http://placehold.it/100x50' />
          </Link>
        </div>

        <div className='right-half'>
          <ul>
            <li><div className='nav-link'><SessionModalContainer formType='Log In' buttonLabel='Log In' /></div></li>
            <li>|</li>
            <li><div className='nav-link'><SessionModalContainer formType='Sign Up' buttonLabel='Sign Up' /></div></li>
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
            <img className='logo' src='http://placehold.it/100x50' />
          </Link>
        </div>

        <div className='right-half'>
          <ul>
            <li><div className='nav-link'><Link to={`/restaurant/new`}>Add Restaurant</Link></div></li>
            <li>|</li>
            <li><div className='nav-link'><Link to={`/profile`}>Profile</Link></div></li>
            <li>|</li>
            <li><div className='nav-link'><Link to={`/`} onClick={ this.props.logout }>Log Out</Link></div></li>
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
