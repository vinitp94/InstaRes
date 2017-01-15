import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createRestaurant, updateRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.restaurantErrors
});

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (rest) => dispatch(createRestaurant(rest)),
  updateRestaurant: (rest) => dispatch(updateRestaurant(rest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);
