export const fetchRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants'
  })
);

export const fetchRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
  })
);

export const createRestaurant = (rest) => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants/${rest.id}`,
    data: { restaurant: rest }
  })
);

export const updateRestaurant = (rest) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/restaurants/${rest.id}`,
    data: { restaurant: rest }
  })
);

export const deleteRestaurant = (rest) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/${rest.id}`
  })
);
