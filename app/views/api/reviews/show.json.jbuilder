json.extract! @review, :id, :rating, :body, :author_id, :restaurant_id, :created_at

all_reviews = @review.restaurant.reviews
num_reviews = all_reviews.count
rating_sum = 0
all_reviews.each do |review|
  rating_sum += review.rating
end

ave_rating = 0
if num_reviews > 0
  ave_rating = (rating_sum.to_f / num_reviews).to_i
end

json.num_reviews num_reviews
json.ave_rating ave_rating
