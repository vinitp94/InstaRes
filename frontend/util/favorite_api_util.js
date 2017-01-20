export const createFavorite = (favorite) => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { favorite: favorite }
  })
);

export const deleteFavorite = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`
  })
);
