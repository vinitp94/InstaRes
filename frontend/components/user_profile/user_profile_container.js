import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { deleteRestaurant } from '../../actions/restaurant_actions';
import { deleteReservation } from '../../actions/reservation_actions';
import { deleteFavorite } from '../../actions/favorite_actions';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  deleteReservation: (id) => dispatch(deleteReservation(id)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  deleteReview: (id) => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
