import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'RECEIVE_FAVORITE';

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const removeFavorite = (favorite) => ({
  type: REMOVE_FAVORITE,
  favorite
});

export const createFavorite = (fave) => (dispatch) => (
  FavoriteAPIUtil.createFavorite(fave)
    .then()
);

export const deleteFavorite = (id) => (dispatch) => (
  FavoriteAPIUtil.deleteFavorite(id)
    .then()
);
