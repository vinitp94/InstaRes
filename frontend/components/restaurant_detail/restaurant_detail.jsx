import React from 'react';

class RestaurantDetail extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  render() {
    return (
      <h1>hi</h1>
    );
  }
}

export default RestaurantDetail;
