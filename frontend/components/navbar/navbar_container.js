import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveSearch } from '../../actions/search_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session, search }) => ({
  currentUser: session.currentUser,
  address: search.address
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveSearch: (address) => dispatch(receiveSearch(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
