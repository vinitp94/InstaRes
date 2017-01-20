import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { receiveAllRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({ errors, restaurantsIndex }) => ({
  restaurants: Object.keys(restaurantsIndex).map(id => restaurantsIndex[id]),
  errors: errors.restaurantErrors
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: (city) => dispatch(fetchRestaurants(city)),
  clearIndex: () => dispatch(receiveAllRestaurants({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
