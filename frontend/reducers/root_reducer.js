import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import RestaurantIndexReducer from './restaurant_index_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  restaurantsIndex: RestaurantIndexReducer,
  restaurantDetail: RestaurantDetailReducer,
  search: SearchReducer
});

export default RootReducer;
