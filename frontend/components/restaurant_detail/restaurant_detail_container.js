import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant, receiveRestaurantErrors } from '../../actions/restaurant_actions';

const mapStateToProps = ({ errors, session, restaurantDetail }) => ({
  currentUser: session.currentUser,
  restaurant: restaurantDetail,
  errors: errors.restaurantErrors
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  emptyErrors: () => dispatch(receiveRestaurantErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
