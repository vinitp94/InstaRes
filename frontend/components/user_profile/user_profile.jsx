import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'Reservations'
    };
  }

  renderTabs() {

  }

  renderSelectedTab() {
    
  }

  render() {
    return (
      <div className='user-profile'>
        <div>
          {this.renderTabs()}
        </div>

        <div>
          {this.renderSelectedTab()}
        </div>
      </div>
    );
  }
}

export default UserProfile;
