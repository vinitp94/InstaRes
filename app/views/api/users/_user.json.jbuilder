json.extract! user, :id, :username

if user.restaurants.empty?
  json.restaurants Object.new
else
  json.restaurants do
    user.restaurants.each do |rest|
      json.set! rest.id do
        json.extract! rest, :id, :name, :image_urls, :category, :price, :city
      end
    end
  end
end

# if user.reviews.empty?
#   json.reviews Object.new
# else
#   json.reviews do
#     user.reviews.each do |review|
#       json.set! review.id do
#         json.extract! review, :id, :rating, :body, :created_at
#       end
#
#       json.set! review.restaurant do
#         json.extract! review.restaurant, :name, :price
#       end
#     end
#   end
# end
