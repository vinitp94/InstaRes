json.extract! user, :id, :username

if user.restaurants.empty?
  json.restaurants Object.new
else
  json.restaurants do
    user.restaurants.each do |rest|
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
        json.extract! rest, :id, :name, :image_urls, :category, :price, :city
        json.num_reviews num_reviews
        json.ave_rating ave_rating
      end
    end
  end
end

if user.reviews.empty?
  json.reviews Object.new
else
  json.reviews do
    user.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :rating, :body, :created_at
        json.restaurant_name review.restaurant.name
      end
    end
  end
end

if user.favorite_restaurants.empty?
  json.favorite_restaurants Object.new
else
  json.favorite_restaurants do |fave|
    json.set fave.id do
      json.extract! fave, :id, :name, :city, :state, :category, :price, :image_urls
    end
  end
end
