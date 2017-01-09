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
  - Sign Up (pop-up style view)
  - Log In (pop-up style view)
  - Log Out

### Phase 2: Nav bar (1 day)

* Objective: Functioning and styled nav bar
  - Logo
  - Search credentials
  - User menu

### Phase 3: Home page (1 days)

* Objective: Functioning and styled home page
  - Simple search form with google autocomplete based on current location
  - Display random restaurants in carousel

### Phase 4: Search detail page (2 days)

* Objective: Functioning restaurant index
  - Index with restaurant pictures with carousels in tile format
  - Simple reservation form on pop up
  - Buttons to add favorites
  - Google map displaying clickable pins

### Phase 5: Restaurant detail page (2 days)

* Objective: Functioning restaurant detail page
  - Include additional photos, reviews, price, etc.
  - Simple reservation form
  - Button to add favorite

### Phase 6: Reviews (1 day)

* Objective: Functioning review feature
  - Allow users to fill out form to add reviews of restaurants

### Phase 7: User profile page (1 day)

* Objective: Functioning user profile page
  - Allow users to view profile from nav bar
  - Display past and current reservations, favorites, and reviews

### Bonus Features (TBD)

- [ ] Email users a confirmation upon reservation booking
- [ ] Order restaurants on search detail page by different credentials
- [ ] Infinite scroll on restaurant detail page
- [ ] Nav bar on restaurant detail page to auto-scroll to relevant part
- [ ] Show reviews as histogram
- [ ] Show similar listings on restaurant detail pages
- [ ] Request reviews from users after date has passed
