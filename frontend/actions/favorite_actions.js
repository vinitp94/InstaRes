import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export const receiveFavorite = (favoriteRestaurant) => ({
  type: RECEIVE_FAVORITE,
  favoriteRestaurant
});

export const updateFavorite = (favoriteRestaurant) => ({
  type: UPDATE_FAVORITE,
  favoriteRestaurant
});

export const removeFavorite = (favoriteRestaurant) => ({
  type: REMOVE_FAVORITE,
  favoriteRestaurant
});

export const createFavorite = (fave) => (dispatch) => (
  FavoriteAPIUtil.createFavorite(fave)
    .then(newfave => dispatch(receiveFavorite(newfave)))
);

export const deleteFavorite = (id) => (dispatch) => (
  FavoriteAPIUtil.deleteFavorite(id)
    .then(remfave => dispatch(removeFavorite(remfave)))
);
