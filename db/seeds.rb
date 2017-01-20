# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'yelp'

# Seed users

User.create(username: 'Demo', email: 'demoemail@demo.com', password: 'demopassword')
User.create(username: 'user123', email: 'user1@demo.com', password: 'user123')
User.create(username: 'tester123', email: 'tester1@demo.com', password: 'tester123')

# Seed restaurants

CITIES = ['San Francisco', 'New York', 'Miami', 'Los Angeles', 'Chicago', 'Seattle'];

CATEGORIES = [
  'American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek',
  'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican',
  'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'
]

IMAGES = [

];

Yelp.client.configure do |config|
  config.consumer_key = ENV['YELP_CONSUMER_KEY']
  config.consumer_secret = ENV['YELP_CONSUMER_SECRET']
  config.token = ENV['YELP_TOKEN']
  config.token_secret = ENV['YELP_TOKEN_SECRET']
end

seed_restaurants = []

CITIES.each do |city|
  ((10..15).to_a.sample).times do
    cat = CATEGORIES.sample
    Yelp.client.search(city, { term: cat, limit: 1 }).businesses.each_with_index do |business, idx|
      rest = Restaurant.new
      rest.name = business.name
      rest.address = business.location.address.first
      rest.city = business.location.city
      rest.state = business.location.state_code
      rest.zip_code = business.location.postal_code
      rest.category = cat
      rest.description = 'This is just a temporary description for testing purposes.'
      rest.phone_num = business.phone
      rest.price = (1..5).to_a.sample
      rest.owner_id = User.all.sample.id
      rest.image_urls = []
      ((2..3).to_a.sample).times do
        rest.image_urls.push(IMAGES.sample)
      end
      rest.save! if rest.valid?
    end
  end
end

# Seed reviews

POSITIVE_REVIEW_BODIES = [
  "Excellent fresh food, excellent service; and we are picky. Beautiful views of the bridge, had a magical night. Noisy though.",
  "We had a perfect table overlooking the bay bridge. Lovely setting and delicious food.",
  "One of the best brunch meals I've had in a long time! Great food. Option to eat outside (quieter and nice on a sunny day with great views of the Bay Bridge).",
  "Quite a variety were available. A very enjoyable evening. It is expensive.",
  "Just tell them your price and let them do the work, you won't regret it.",
  "Delicious food, excellent service (especially at the chef's counter), but a little overpriced. Still, one of the better experiences I have had, and the quality of the food was top notch.",
  "Always one of my favorites , food is innovative and always the freshest available. Great Chef and service. Go for the sunsets on the west coast....",
  "Great rooftop dining. The views & atmosphere were amazing. Food was incredible and promptly served. Suggested for a weekend trip stop and it did not disappoint.",
  "Amazing food and sangria! Great staff and perfect views.",
  "We went for the food and found everything else just as good - the food was excellent - the chicken was very tasty and tender - I can see why it is the house specialty - but the kale salad was a surprising flavor treat.",
  "Incredible! The ambiance is great, the place is really modern and cool, and all of the good was delicious. The food options are very unique, as are the drinks. This place is great for both vegetarians and non vegetarians alike! Highly recommend!",
  "Crazy good. We just completely loved our meal. Great date night!",
  "Great restaurant for vegetarians, vegans and those that just enjoy great food.",
  "The roasted chicken was the best I've ever had, just amazing. The staff was wonderful and the decor was very cool and comfortable. I love this restaurant!",
  "Entire experience was amazing. I found the service team from the front through service to be exceptional. Looking forward to returning.",
  "Amazing, fenomenal! Best place ever! I'm sure I will come back!",
  "Excellent venue.Great views.Overpriced food and drink..but the view compensated for that...I suppose!",
  "Great views, wonderful way to see the skyline. Great ambience. The cheese board was very good. The small one was perfect for two. Would definitely return on a future visit.",
  "Beautiful view, great food and drinks. Great service.",
  "Great innovative food with a wonderful well trained staff.",
  "Our favorite restaurant from the day it opened and for years to come! Amazing new menu - short ribs are to die for! Perfect cuisine matched by perfect service! Thank you to Andrew and the entire team for taking such amazing care of us over the years!",
  "Hands down the best foot experience of my life. I was wowed by every dish and the service was superb to anything I've experienced. Cannot wait to go back...",
  "Innovative food, good service, interesting to visit especially as a tourist, reasonably good wines, pricy as many hotsopts are here.",
  "Quiet cozy little restaurant with an amazing menu. I literally wanted to try everything! Can't wait to go back.",
  "Such a delightful restaurant. The food, ambiance, and service was wonderful. Everything we sampled was beyond delicious. We sat in the patio and it was a charming, intimate space. I will absolutely return again.",
  "Great restaurant. Attentive and personable staff. Will definitely be back.",
  "Incredible view and very good food. Lovely server. The only thing service stuff didn't wait until we were all finished with our meal to clean the table.",
  "The evening was fabulous. A friend from NYC was in town and I wanted to WOW her. She loved the restaurant, the food, the ambience, the views, the music. It was perfect evening!",
  "Skeptical at first but food was delicious and service excellent. Not the most beautiful restaurant !!!! Weather was rainy so we we not able to enjoy the view of the water.",
  "We had a great time and everyone was great. We always look forward to an evening there.",
  "Everything was delicious! Will not disappoint! We have been back twice and will come back soon!",
  "Food and service outstanding. Beef wellington onion soup sticky toffee pudding all incredible. Pricey but worth it.",
  "Had an amazing experience at the restaurant. Staff were amazing and very helpful. The taster menu tasted absolutely fantastic. Quite possibly the best meal I have ever tasted.",
  "Great view of the city, food very good but very expensive.",
  "Best view in Las Vegas and great martinis in the bar for happy hour.",
  "Service was AMAZING. Very attentive and helpful. He had great suggestions and made it a very fun night.",
  "Phenomenal vegetable dishes! So good we just ordered several of them for our meal. Perfectly times to come out one at a time so that we could enjoy.",
  "Love the decor. The food was amazing. It's nice too because they offer a 4oz or an 8oz steak and sometimes you don't want a huge steak. The tomato and crab salad, mac and cheese, and smores dessert was so good!",
  "Awesome! Surprisingly good prices and the food was excellent. Our waiter was so helpful and friendly. Would go back!",
  "Couldn't find a single thing wrong with this restaurant! Definitely a must try when in town!"
]

NEGATIVE_REVIEW_BODIES = [
  "We left with lighter wallets yet unsatisfied palates, and walked next door to Epic, which offered better views, tastier food, friendlier service, less frenzy and lower prices.",
  "They charge too much. The food was good but not worth the price. Also, their wine by the glass is around $15/glass. Way too high.",
  "With the space enclosed the noise levels appear to rise and we found it verging on uncomfortable.",
  "Food was awful. Not at all Southern. Staff was accommodating and nice but the food was just starch and protein on a plate and very disappointing.",
  "Excellent view. Food was not what I expected for the price. I was not thrilled about the quality, or presentation or portion size. Too many lines. Thank goodness I had a reservation, but then had to get in line to go upstairs.",
  "Very slow service. Took 15 minutes for our drinks to arrive. Server was not attentive - all 4 of our water glasses were empty and the dessert arrived 25 minutes after placing the order. Lastly, it took 20 mins for our car to arrive from the valet.",
  "The ambiance is nice, however, the food is nothing to ride home about. It was pricey and to be honest we all walked out with room for more, yet we had no interest in ordering anything else again. The best dish was the octopus. Not impressed, would not return.",
  "Good service; food is overrated; extremely high prices - paying for the experience.",
  "I almost didn't want to write a review about this amazing restaurant because I didn't want to risk too many people hearing about this place. So I decided to give it one star instead.",
  "Wasn't much of a fan of the food. It's greasy and heavy and super spicy, and most of the flavors seem to be the same.",
  "My food tasted like it had been sitting out for half an hour. On another note, what an awesome staff manning the orders. Keep up the smiles!",
  "This was just so-so. I had high expectations for this place given its location in a foodie city, and a let down is an understatement. The food smelled great, but the taste was lacking.",
  "Highlight of the meal was a bus boy smuggling us two cheese sticks from the bar as we waited close to an hour between courses.The cheese sticks were delish.",
  "Found a fingernail in my food. The one star is for the waitress who seemed more traumatized than we were.",
  "They forgot my added avocado and charged me...unforgivable offense.",
  "Save yourself the trouble and don't go here...",
  "Food was cold and they overcharged me.. got into an argument with the manager",
  "They were out of material needed to make half the dishes on the menu.",
  "The food was alright but the ambeince was so bad. I felt uncomfortable the entire time that I couldn't even enjoy my meal.",
  "The waiter was extremely rude to my wife after he spilled on her. We immediately got up and left.",
  "The owner needs to wake up and start hiring responsible people who wants to provide good customer service. When I called 8 minutes to 3:00 the answering machine came on and said they and do not orders over the phone, so immediately called back,  someone picked up the phone and laid the receiver down but did not hang up!",
  "Nothing too special.",
  "Service: Terrible! Employees were so caught up with mingling amongst each other, not really attentive or aware of the customers.",
  "Server did not inform us of extra charges on sides so we ended up with a huge bill that we did not expect.",
  "They brought out the wrong order and the server argued with me and blamed me for ordering the wrong thing and changing my mind and forgetting.",
  "Absolutely terrible in every aspect. The worst dining experience I've ever had.",
  "Do you remember in the movie Elf with Will Ferrell in how he congratulates that diner for The World's Best Cup of Coffee when actually it was just really a really mediocre cup of coffee.",
  "Food is as expected - too much, too greasy, but exactly what we ordered.",
  "I did enjoy the food but I was so thirty for the rest of the evening and I suspect there was a lot of msg in the broth?",
  "What's going on?? I dined in last week and the taste was completely different!! Very bland and boring.",
  "Too small staff came off like it was all about the money, i need that genuine happy to have you feeling.",
  "Food was good but I didn't feel welcome at all.",
  "This place is very popular and is probably great for people in the neighborhood, but it may not be worth a trip across town with so many other options available.",
  "We had to wait 35 minutes just to get our food. But the food really was amazing.",
  "We had to wait for way too long for our food. The waitress was so ditzy and I hate to say this, she was just dumb! And so uncoordinated! She kept bumping into things.",
  "Now I don't even want to bother. I'm paranoid they'll spit in my food for complaining.",
  "Will I be back? Sure, when I get my water refilled! (I'm still waiting) - NOT!",
  "Service: Negative 5 Stars, Food: Negative 5 Stars, Value: Negative 5 Stars",
  "Just too expensive now. I ate there regularly... Sad to say I won't go back.",
  "Food is bland. Very bland, flavorless, dry (oh and it came with a free stone too on my salad!)."
]

(Restaurant.all.count * 3).times do
  rev = Review.new
  rev.rating = (1..5).to_a.sample
  if rev.rating > 2
    rev.body = POSITIVE_REVIEW_BODIES.sample
  else
    rev.body = NEGATIVE_REVIEW_BODIES.sample
  end

  rev.author_id = User.all.sample.id
  rev.restaurant_id = Restaurant.all.sample.id
  rev.save! if rev.valid?
end

# Seed favorites

(User.all.count * 5).times do
  fav = Favorite.new
  fav.user_id = User.all.sample.id
  fav.restaurant_id = Restaurant.all.sample.id
  fav.save! if fav.valid?
end
