import { connect } from 'react-redux';
import ReviewModal from './review_modal';
import { createReview, receiveReviewErrors } from '../../actions/review_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.reviewErrors
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  emptyErrors: () => dispatch(receiveReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewModal);
