import { connect } from 'react-redux';
import SessionModal from './session_modal';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);

  if (formType === 'login') {
    return {
      processForm: (user) => dispatch(login(user)),
      formType
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user)),
      formType
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
