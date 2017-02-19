import { connect } from 'react-redux';
import { receiveSearch } from '../../actions/search_actions';
import Home from './home';

const mapDispatchToProps = (dispatch) => ({
  receiveSearch: (address) => dispatch(receiveSearch(address))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
