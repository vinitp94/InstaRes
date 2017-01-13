import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render() {
    return (
      <div className='index-page'>
        <div className='restaurant-index'>
          <div className='restaurant-filter-form'>
            Render FilterForm container here.
          </div>

          <div className='index-list'>
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
        </div>

        <div className='map'>
          Render Map container
        </div>
      </div>
    );
  }
}

export default RestaurantIndex;
