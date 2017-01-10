import React from 'react';
import { Link } from 'react-router';
// import SessionModalContainer from '../session_modals/session_modal_contailer';

class NavBar extends React.Component {

  loggedOutNav() {
    return (
      <div className='navbar'>
        <img src='http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png'></img>
        <Link className='authlink' to={ `/login` }>Log In</Link>
        <Link className='authLink' to={ `/signup` }>Sign Up</Link>

      </div>
    );
  }

  loggedInNav() {
    return (
      <div className='navbar'>
        <img src='http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png'></img>
        <p>Hello { this.props.currentUser.username }</p>
        <Link to={ `/` } onClick={ this.props.logout }>Log Out</Link>
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
