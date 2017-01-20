import React from 'react';
import UserProfileReservations from './user_profile_reservations';
import UserProfileRestaurants from './user_profile_restaurants';
import UserProfileFavorites from './user_profile_favorites';
import UserProfileReviews from './user_profile_reviews';

const TABS = ['Reservations', 'Restaurants', 'Favorites', 'Reviews'];

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'Reservations' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ selected: e.currentTarget.value });
  }

  renderTabs() {
    return (
      TABS.map((tab, idx) => {
        if (tab === this.state.selected) {
          return <button id='selected-tab' value={tab} onClick={this.handleClick}>{tab}</button>;
        } else {
          return <button value={tab} onClick={this.handleClick}>{tab}</button>;
        }
      })
    );
  }

  renderSelectedTab() {
    if (this.state.selected === 'Reservations') {
      return <UserProfileReservations
        deleteReservation={this.props.deleteReservation}
        reservations={this.props.currentUser.reservations} />;
    } else if (this.state.selected === 'Restaurants') {
      return <UserProfileRestaurants
        deleteRestaurant={this.props.deleteRestaurant}
        restaurants={this.props.currentUser.restaurants} />;
    } else if (this.state.selected === 'Favorites') {
      return <UserProfileFavorites
        deleteFavorite={this.props.deleteFavorite}
        favorites={this.props.currentUser.favorites} />;
    } else if (this.state.selected === 'Reviews') {
      return <UserProfileReviews
        deleteReview={this.props.deleteReview}
        reviews={this.props.currentUser.reviews} />;
    }
  }

  render() {
    return (
      <div className='user-profile'>
        <div className='profile-tabs'>
          {this.renderTabs()}
        </div>

        <div className='profile-data'>
          {this.renderSelectedTab()}
        </div>
      </div>
    );
  }
}

export default UserProfile;
