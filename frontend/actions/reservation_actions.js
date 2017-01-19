import * as ReservationAPIUitl from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const removeReservation = (reservation) => ({
  type: REMOVE_RESERVATION,
  reservation
});

export const createReservation = (reserve) => (dispatch) => (
  ReservationAPIUitl.createReservation(reserve)
    .then(newres => dispatch(receiveReservation(reserve)))
);

export const deleteReservation = (id) => (dispatch) => (
  ReservationAPIUitl.deleteReservation(id)
    .then(remres => dispatch(removeReservation(remres)))
);
