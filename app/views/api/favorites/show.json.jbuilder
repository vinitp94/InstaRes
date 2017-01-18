json.favorite_id @favorite.id

rest = @favorite.restaurant

json.extract! rest, :id, :city, :name, :price, :category, :state, :image_urls
