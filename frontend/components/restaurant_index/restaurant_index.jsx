import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render() {
    return (
      <div className='restaurant-index'>
        <ul>
          {
            this.props.restaurants.map(rest => (
              <RestaurantIndexItem
                key={rest.id}
                restaurant={rest} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default RestaurantIndex;
