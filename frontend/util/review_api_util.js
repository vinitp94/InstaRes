export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review: review }
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
);
