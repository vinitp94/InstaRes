#InstaRes

[live]: https://www.heroku.com/

[Live Site][live]

[Trello](https://trello.com/)

## Minimum Viable Product

InstaRes is a web app inspired by OpenTable, where users are able to easily make reservations at nearby food joints, write reviews, and keep track of favorites. The minimum viable product is outlined below:

- [ ] [Hosting on Heroku][live]
- [ ] [Production README](../README.md)
- [ ] User Authentication: Account creation, user sessions, and demo login
- [ ] Search form for restaurants
- [ ] List of available restaurants in search area and pins on map
- [ ] Restaurant show page with details and reviews
- [ ] Users can add restaurants and write reviews
- [ ] Book reservations through search detail page or restaurant detail page
- [ ] List reservations, favorites, and reviews on user profile page

## Design Docs
* [View Wireframes](./wireframes)
* [React Components](./component-hierarchy.md)
* [API Endpoints](./api-endpoints.md)
* [DB Schema](./schema.md)
* [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and user authentication (2 days)

* Objective: Functioning Rails app with front-end authentication
  - Sign up form using modal
  - Log in form using modal
  - Log Out

### Phase 2: Nav bar (1 day)

* Objective: Functioning and styled nav bar
  - Logo
  - User menu

### Phase 3: Create restaurants (1 day)

* Objective: Functioning and styled restaurant form
  - Restaurant creation form using modal

### Phase 4: Search by location/search restaurants (1 day)

* Objective: Functioning and styled search forms
  - Search form on home page by location (in nav bar)
  - Search form on index page for restaurants

### Phase 5: Create reviews (1 day)

* Objective: Functioning and styled review form
  - Review form using modal

### Phase 6: Add reservations (0.5 day)

* Objective: Functioning and styled reserve buttons
  - Display buttons for reservations slots on restaurant detail page
  - Display buttons for booking on index page

### Phase 7: Add favorites feature (0.5 day)

* Objective: Functioning and styled favorites feature
  - Allow users to click a heart symbol to add/remove favorites

### Phase 8: Restaurant Index page (1 day)

* Objective: Functioning and styled restaurant index
  - Google map displaying clickable pins
  - Buttons to add favorites
  - Update in real based on search criteria

### Phase 9: Restaurant detail page (1 days)

* Objective: Functioning restaurant detail page
  - Include additional photos, reviews, price, etc.
  - Simple reservation form
  - Button to add favorite

### Phase 7: User profile page (1 day)

* Objective: Functioning user profile page
  - Allow users to view profile from nav bar
  - Display past and current reservations, favorites, and reviews

### Bonus Features (TBD)

- [ ] User profile page with side nav, past/current reservations, favorites, reviews
- [ ] Index with restaurant pictures with carousels in tile format
- [ ] Order restaurants on search detail page by different credentials
- [ ] Infinite scroll on restaurant detail page
- [ ] Email users a confirmation upon reservation booking
- [ ] Show reviews as histogram
- [ ] Show similar listings on restaurant detail pages
- [ ] Request reviews from users after date has passed
