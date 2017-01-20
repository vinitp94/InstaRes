import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantSearchContainer from '../restaurant_search/restaurant_search_container';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants(this.props.params.city);
  }

  componentWillUpdate() {
    this.props.fetchRestaurants(this.props.params.city);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx + err}>
            {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='index-page'>
        <div className='restaurant-index'>
          <RestaurantSearchContainer />

          <span className='error'>
            {this.renderErrors()}
          </span>

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

      </div>
    );
  }
}

export default RestaurantIndex;
