# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'yelp'

# Seed users

User.create(username: 'Demo', email: 'demoemail@demo.com', password: 'demopassword')
User.create(username: 'user123', email: 'user1@demo.com', password: 'user123')
User.create(username: 'tester123', email: 'tester1@demo.com', password: 'tester123')

# Seed restaurants
# TODO: REPLACE IMAGES WITH REAL IMAGES USING YELP API

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
  config.consumer_key = ENV['YELP_CONSUMER_KEY']
  config.consumer_secret = ENV['YELP_CONSUMER_SECRET']
  config.token = ENV['YELP_TOKEN']
  config.token_secret = ENV['YELP_TOKEN_SECRET']
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
    rest.website_url = 'www.google.com'
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
