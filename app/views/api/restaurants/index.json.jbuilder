@restaurants.each do |rest|
  json.set! rest.id do
    json.extract! rest, :id, :name, :image_urls, :category, :price
  end
end
