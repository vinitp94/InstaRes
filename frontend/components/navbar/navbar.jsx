import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { Link, hashHistory } from 'react-router';
import SessionModalContainer from '../session_modals/session_modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO: CLEAR SEARCH BAR WHEN APPLICABLE

  renderSearch() {
    return <Autocomplete
      onPlaceSelected={ (place) => {
        this.props.receiveSearch(place.formatted_address);
        hashHistory.push(`/restaurants/index/${place.formatted_address}`);
      }}
      placeholder={'Enter a Location'}
      types={['address']}
      id='nav-auto' />;
  }

  renderBackToSearch() {
    if (this.props.address) {
      return (
        <li>
          <div className='nav-link'>
            <Link to={`/restaurants/index/${this.props.address}`}>
              Back to Search
            </Link>
          </div>
        </li>
      );
    }
  }

  renderLeftHalf() {
    return (
      <div className='left-half'>
        <Link to={`/`}>
          <img className='logo' src='http://res.cloudinary.com/dlhshbg79/image/upload/v1484917459/Logomakr_3SIEea_dcfuqv.png' />
        </Link>

        {this.renderSearch()}
        {this.renderBackToSearch()}
      </div>
    );
  }

  loggedOutNav() {
    return (
      <div className='navbar'>
        {this.renderLeftHalf()}

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

  loggedInNav() {
    return (
      <div className='navbar'>
        {this.renderLeftHalf()}

        <div className='right-half'>
          <ul>
            <li><div className='nav-link'><Link to={`/restaurants/new`}>Add Restaurant</Link></div></li>
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
