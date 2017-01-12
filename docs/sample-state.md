```js
{
  currentUser: {
    id: 1,
    username: 'user123'
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createReview: { errors: [] },
    createRestaurant: { errors: [] }
  }
  restaurantsIndex: {
    restaurants: {  
      1: {
        id: 1
        name: 'Osha Thai'
        image_urls: [http://image1.jpg],
        category: 'Thai'
        price: 4
      },
      3: {
        id: 3
        name: 'AsiaSF'
        image_urls: [],
        category: Asian
        price: 3
      }
    }
    errors: ['error1']
  }
  restaurantDetail: {
    id: 1
    name: 'Osha Thai'
    image_urls: [http://image1.jpg]
    category: 'Thai'
    price: 4
    address: '3 Market St'
    city: 'San Francisco'
    state: 'California'
    zip_code: '95014'
    website_url: 'http://oshathai.com'
    description: 'Best Thai food in SF'
    reservations: {
      1: {
        party_size: 4,
        time_slot: '2015-11-16 13:00:00'
        user_id: 5,
        restaurant_id: 1
      }
    }
    reviews: {
      1: {
        rating: 5,
        body: 'Excellent!',
        user_id: 4,
        restaurant_id: 1
      }
    }
  }
}
```
