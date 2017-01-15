import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createRestaurant, fetchRestaurant, updateRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, errors, restaurantDetail }, ownProps) => ({
  currentUser: session.currentUser,
  errors: errors.restaurantErrors,
  restaurant: restaurantDetail,
  formType: ownProps.location.pathname.endsWith('new') ? 'new' : 'edit'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  updateRestaurant: (restaurant) => dispatch(updateRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);
