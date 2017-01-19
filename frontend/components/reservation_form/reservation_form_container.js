import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { createReservation } from '../../actions/reservation_actions';

const mapStateToProps = ({ session, restaurantDetail }) => ({
  currentUser: session.currentUser,
  restaurant: restaurantDetail
});

const mapDispatchToProps = (dispatch) => ({
  createReservation: (res) => dispatch(createReservation(res))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
