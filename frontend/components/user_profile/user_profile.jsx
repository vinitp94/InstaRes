import React from 'react';
import Unauthorized from '../unauthorized/unauthorized';

class UserProfile extends React.Component {
  render() {
    return <h2>{this.props.currentUser.username}</h2>;
  }
}

export default UserProfile;
