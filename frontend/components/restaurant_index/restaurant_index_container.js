import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = ({ restaurantsIndex }) => ({
  restaurants: restaurantsIndex.restaurants,
  errors: restaurantsIndex.errors
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
