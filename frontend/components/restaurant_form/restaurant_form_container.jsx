import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, restaurantsIndex }) => ({
  currentUser: session.currentUser,
  errors: restaurantsIndex.errors
});

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (rest) => dispatch(createRestaurant(rest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);
