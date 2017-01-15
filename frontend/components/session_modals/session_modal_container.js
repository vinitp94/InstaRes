import { connect } from 'react-redux';
import SessionModal from './session_modal';
import { login, signup, receiveSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.sessionErrors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  emptyErrors: () => dispatch(receiveSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
