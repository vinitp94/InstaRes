import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurantsIndex: RestaurantReducer,
  restaurantDetail: RestaurantDetailReducer
});

export default RootReducer;
