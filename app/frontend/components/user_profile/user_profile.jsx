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
          return <button
            key={idx}
            id='selected-tab'
            value={tab}
            onClick={this.handleClick}>{tab}</button>;
        } else {
          return <button
            key={idx}
            value={tab}
            onClick={this.handleClick}>{tab}</button>;
        }
      })
    );
  }

  renderSelectedTab() {
    let reservations = Object.keys(this.props.currentUser.reservations).map(resId => (
      this.props.currentUser.reservations[resId]
    ));
    let restaurants = Object.keys(this.props.currentUser.restaurants).map(restId => (
      this.props.currentUser.restaurants[restId]
    ));
    let favorites = Object.keys(this.props.currentUser.favorites).map(favId => (
      this.props.currentUser.favorites[favId]
    ));
    let reviews = Object.keys(this.props.currentUser.reviews).map(revId => (
      this.props.currentUser.reviews[revId]
    ));

    if (this.state.selected === 'Reservations') {
      return <UserProfileReservations
        deleteReservation={this.props.deleteReservation}
        reservations={reservations} />;
    } else if (this.state.selected === 'Restaurants') {
      return <UserProfileRestaurants
        deleteRestaurant={this.props.deleteRestaurant}
        restaurants={restaurants} />;
    } else if (this.state.selected === 'Favorites') {
      return <UserProfileFavorites
        deleteFavorite={this.props.deleteFavorite}
        favorites={favorites} />;
    } else if (this.state.selected === 'Reviews') {
      return <UserProfileReviews
        deleteReview={this.props.deleteReview}
        reviews={reviews} />;
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
