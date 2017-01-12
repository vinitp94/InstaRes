# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Demo', email: 'demoemail@demo.com', password: 'demopassword')
User.create(username: 'user123', email: 'user1@demo.com', password: 'user123')
User.create(username: 'tester123', email: 'tester1@demo.com', password: 'tester123')

Restaurant.create(name: 'My First Joint', address: '10571 San Leandro Ave',
  city: 'Cupertino', state: 'CA', zip_code: 95014, category: 'Thai',
  description: 'Im doing this to test my app', price: 4, phone_num: '(408) 838 7249',
  website_url: 'www.google.com', owner_id: 1, image_urls:
  ['https://unsplash.com/search/food?photo=Pt_YmiYm7a4',
    'https://unsplash.com/search/food?photo=Dq5g1u1eg1Q'])

Restaurant.create(name: 'My 2nd Joint', address: 'Random addy',
  city: 'Sactown', state: 'CA', zip_code: 84853, category: 'American',
  description: 'I hate seeding', price: 2, phone_num: '(408) 777 8293',
  website_url: 'www.yahoo.com', owner_id: 2, image_urls:
  ['https://unsplash.com/search/food?photo=TTrJMhrkoeY',
    'https://unsplash.com/search/food?photo=Py0QLFEAagY'])

Restaurant.create(name: 'FOOD Joint', address: 'another address',
  city: 'compton', state: 'NY', zip_code: 90024, category: 'Indian',
  description: 'Its over', price: 5, phone_num: '(408) 123 4567',
  website_url: 'www.yelp.com', owner_id: 2, image_urls:
  ['https://unsplash.com/search/food?photo=ztgcyQILXsM',
    'https://unsplash.com/search/food?photo=zdunBSAi3P0'])
