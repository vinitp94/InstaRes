export const createReservation = (reservation) => (
  $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: { reservation: reservation }
  })
);

export const deleteReservation = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${id}`
  })
);
