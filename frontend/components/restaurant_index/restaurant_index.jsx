import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantSearchContainer from '../restaurant_search/restaurant_search_container';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cityName: "" , loading: true };
  }

  componentDidMount() {
    if (this.props.params.city !== this.state.cityName) {
      this.props.fetchRestaurants(this.props.params.city);
      this.setState({ cityName: this.props.params.city });
    }
  }

  componentWillReceiveProps() {
    if (this.props.params.city !== this.state.cityName) {
      this.props.fetchRestaurants(this.props.params.city);
      this.setState({ cityName: this.props.params.city });
    }
  }

  componentWillUnmount() {
    debugger
    this.props.clearIndex();
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
