import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const createReview = (rev) => (dispatch) => (
  ReviewAPIUtil.createReview(rev)
    .then(newrev => dispatch(receiveReview(newrev)),
          err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const deleteReview = (id) => (dispatch) => (
  ReviewAPIUtil.deleteReview(id)
    .then(remrev => dispatch(removeReview(remrev)),
          err => dispatch(receiveReviewErrors(err.statusText)))
);
