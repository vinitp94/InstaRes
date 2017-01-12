import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantIndexReducer from './restaurant_index_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurantsIndex: RestaurantIndexReducer,
  restaurantDetail: RestaurantDetailReducer
});

export default RootReducer;
