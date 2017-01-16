import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';

const mapStateToProps = ({ errors, restaurantsIndex }) => ({
  restaurants: restaurantsIndex
});

export default connect(
  mapStateToProps,
  null
)(RestaurantSearch);
