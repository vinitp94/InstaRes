## Component Hierarchy

* App
  * NavBar
    * AuthForm
    * AddRestaurantForm
    * UserProfile
      * ReservationsIndex
        * ReservationIndexItem
      * FavoritesIndex
        * RestaurantIndexItem
      * ReviewsIndex
        * ReviewIndexItem
      * RestaurantsIndex
        * OwnRestaurantIndexItem
    * RestaurantIndex
      * AddReviewForm
      * RestaurantIndexItem
    * RestaurantDetail
      * AddReviewForm

| Path                 | Component                    |
|----------------------|------------------------------|
| '/'                  | 'App'                        |
| '/'                  | 'NavBarContainer'            |
| '/sign-up'           | 'AuthFormContainer'          |
| '/log-in'            | 'AuthFormContainer'          |
| '/users/:id'         | 'UserContainer'              |
| '/restaurants'       | 'RestaurantIndexContainer'   |
| '/restaurant/:id'    | 'RestaurantDetailContainer'  |
