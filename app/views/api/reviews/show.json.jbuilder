json.extract! @review, :id, :rating, :body, :author_id, :restaurant_id

all_reviews = @review.restaurant.reviews
rating_sum = 0
all_reviews.each do |review|
  rating_sum += review.rating
end

ave_rating = rating_sum.to_f / all_reviews.count
json.ave_rating ave_rating.to_i
