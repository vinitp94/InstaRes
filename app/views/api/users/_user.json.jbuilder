json.extract! user, :id, :username

json.restaurants do
  user.restaurants.each do |rest|
    json.set! rest.id do
      json.extract! rest, :id, :name, :image_urls, :category, :price, :city
    end
  end
end
