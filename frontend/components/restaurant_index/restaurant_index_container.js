import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../restaurant_actions';

const mapStateToProps = ({ restaurantsIndex }) => ({
  restaurants: Object.keys(restaurantsIndex.restaurants).map(id => restaurantsIndex.restaurants[id]),
  errors: restaurantsIndex.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
