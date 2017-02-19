import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantSearchContainer from '../restaurant_search/restaurant_search_container';
import Spinner from '../spinner.jsx';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { addressName: "" };
  }

  componentDidMount() {
    this.props.fetchRestaurants(this.props.params.address);
    this.setState({ addressName: this.props.params.address });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.address !== this.state.addressName) {
      this.props.fetchRestaurants(newProps.params.address);
      this.setState({ addressName: newProps.params.address });
    }
  }

  componentWillUnmount() {
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

  sortBySearch() {
    // TODO: SORT BY CLOSEST RESTAURANTS BASED ON SEARCH

    return this.props.restaurants;
  }

  render() {
    if (this.props.restaurants.length === 0 && this.props.errors.length === 0) {
      return <Spinner />;
    } else {
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
                  this.sortBySearch().map(rest => (
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
}

export default RestaurantIndex;
