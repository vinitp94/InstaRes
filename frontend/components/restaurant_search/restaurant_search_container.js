import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';

const mapStateToProps = ({ errors, restaurantsIndex }) => ({
  restaurants: Object.keys(restaurantsIndex).map(id => (restaurantsIndex[id]))
});

export default connect(
  mapStateToProps,
  null
)(RestaurantSearch);
