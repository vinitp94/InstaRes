export const fetchRestaurants = (address) => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    data: { address: address }
  });
};

export const fetchRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
  })
);

export const createRestaurant = (rest) => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants`,
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

export const deleteRestaurant = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/${id}`
  })
);
