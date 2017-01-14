# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'yelp'

# Seed users

User.create(username: 'Demo', email: 'demoemail@demo.com', password: 'demopassword')
User.create(username: 'user123', email: 'user1@demo.com', password: 'user123')
User.create(username: 'tester123', email: 'tester1@demo.com', password: 'tester123')

# Seed restaurants

CATEGORIES = [
  'American',
  'British',
  'Caribbean',
  'Chinese',
  'French',
  'Greek',
  'Indian',
  'Italian',
  'Japanese',
  'Mediterranean',
  'Mexican',
  'Moroccan',
  'Spanish',
  'Thai',
  'Turkish',
  'Vietnamese'
]

Yelp.client.configure do |config|
  config.consumer_key = 'bTyjOGxCxNxGBGGuQr7-yQ'
  config.consumer_secret = '614Bhj4BiPdFqSfQofoZcgzlEeE'
  config.token = 'HAsIuxZjO_KRDmS9WCSBZ91qsjgdowng'
  config.token_secret = 'T_brzydZ5zXyc503f_UTs9NNHWc'
end

seed_restaurants = []
num_users = User.all.length

CATEGORIES.each do |cat|
  Yelp.client.search('San Francisco', { term: cat, limit: 1 }).businesses.each_with_index do |business, idx|
    num_rests = Restaurant.all.length

    rest = Restaurant.new
    rest.name = business.name
    rest.address = business.location.address.first
    rest.city = business.location.city
    rest.state = business.location.state_code
    rest.zip_code = business.location.postal_code
    rest.category = cat
    rest.description = 'This is just a temporary description for testing purposes.'
    rest.phone_num = business.phone
    rest.website_url = business.url
    rest.price = (1..5).to_a.sample
    rest.owner_id = (1..num_users).to_a.sample
    rest.image_urls = []
    ((1..5).to_a.sample).times do
      image_num = (0..1000).to_a.sample
      rest.image_urls.push("https://unsplash.it/300/200/?image=#{image_num}")
    end
    rest.save! if rest.valid?
  end
end






# Restaurant.create(name: 'My First Joint', address: '10571 San Leandro Ave',
#   city: 'Cupertino', state: 'CA', zip_code: 95014, category: 'Thai',
#   description: 'Im doing this to test my app', price: 4, phone_num: '4088387249',
#   website_url: 'www.google.com', owner_id: 1, image_urls: [image1,image2,image3,image4])

# Restaurant.create(name: 'My 2nd Joint', address: 'Random addy',
#   city: 'Sactown', state: 'CA', zip_code: 84853, category: 'American',
#   description: 'It is a long established fact that a reader will be distracted
#   by the readable content of a page when looking at its layout. The point of
#   using Lorem Ipsum is that it has a more-or-less normal distribution of
#   letters, as opposed to using Content here, content here, making it look
#   like readable English. Many desktop publishing packages and web page editors
#   now use Lorem Ipsum as their default model text, and a search for lorem ipsum
#   will uncover many web sites still in their infancy. Various versions have
#   evolved over the years, sometimes by accident, sometimes on purpose
#   (injected humour and the like).', price: 2, phone_num: '(408) 777 8293',
#   website_url: 'www.yahoo.com', owner_id: 2, image_urls:
#   ['http://lorempixel.com/300/200/nightlife',
#     'http://lorempixel.com/300/200/fashion',
#     'http://lorempixel.com/300/200/abstract'])
#
# Restaurant.create(name: 'FOOD Joint', address: 'another address',
#   city: 'compton', state: 'NY', zip_code: 90024, category: 'Indian',
#   description: 'Its over', price: 5, phone_num: '(408) 123 4567',
#   website_url: 'www.yelp.com', owner_id: 2, image_urls:
#   ['http://lorempixel.com/300/200/nature'])
