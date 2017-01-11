import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session_modals/session_modal_container';

class NavBar extends React.Component {

  loggedOutNav() {
    return (
      <div className='navbar'>
        <Link to={`/`}>
          <img src='http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png'></img>
        </Link>

        <SessionModalContainer formType={'Log In'} buttonLabel={'Log In'} />
        <SessionModalContainer formType={'Sign Up'} buttonLabel={'Sign Up'} />
      </div>
    );
  }

  loggedInNav() {
    return (
      <div className='navbar'>
        <Link to={`/`}>
          <img src='http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png'></img>
        </Link>

        <p>Hello {this.props.currentUser.username}</p>
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
