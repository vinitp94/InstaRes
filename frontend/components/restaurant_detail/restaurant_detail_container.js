import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, restaurantDetail }) => ({
  currentUser: session.currentUser,
  restaurant: restaurantDetail.restaurant,
  errors: restaurantDetail.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
