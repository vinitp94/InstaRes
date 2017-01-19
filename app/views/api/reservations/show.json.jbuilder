json.extract! @reservation, :id, :slot, :party_size, :restaurant_id

rest = @reservation.restaurant

json.image_urls rest.image_urls
json.name rest.name
