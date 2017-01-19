json.extract! @restaurant, :id, :name, :image_urls, :category, :price,
  :address, :city, :state, :zip_code, :description, :phone_num, :website_url,
  :owner_id

all_reviews = @restaurant.reviews
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

if @restaurant.reviews.empty?
  json.reviews Object.new
else
  json.reviews do
    @restaurant.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :rating, :body, :created_at
      end
    end
  end
end

if @restaurant.reservations.empty?
  json.reservations Object.new
else
  json.reservations do
    @restaurant.reservations.each do |reserve|
      json.set! reserve.id do
        json.extract! reserve, :id, :slot, :party_size
      end
    end
  end
end
