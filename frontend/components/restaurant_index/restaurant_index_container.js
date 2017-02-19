import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants, receiveAllRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({ errors, restaurantsIndex }) => ({
  restaurants: Object.keys(restaurantsIndex).map(id => restaurantsIndex[id]),
  sLat: restaurantsIndex.search_lat,
  sLong: restaurantsIndex.search_long,
  errors: errors.restaurantErrors
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: (address) => dispatch(fetchRestaurants(address)),
  clearIndex: () => dispatch(receiveAllRestaurants({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
