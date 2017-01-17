@restaurants.each do |rest|
  all_reviews = rest.reviews
  num_reviews = all_reviews.count
  rating_sum = 0
  all_reviews.each do |review|
    rating_sum += review.rating
  end

  ave_rating = 0
  if num_reviews > 0
    ave_rating = (rating_sum.to_f / num_reviews).to_i
  end

  json.set! rest.id do
    json.extract! rest, :id, :name, :image_urls, :category, :price
    json.num_reviews num_reviews
    json.ave_rating ave_rating
  end
end
