# InstaRes

[InstaRes][instares] is a web application that allows users to browse popular restaurants as well as host their own restaurants. It is originally inspired by [OpenTable][opentable], allowing users to also make reservations, write reviews, and track favorites.

InstaRes is an individual project utilizing the following technologies:

- Backend: Ruby on Rails
- Frontend: React/Redux
- DB: Postgres RDBMS

<!-- ![alttag](home page here) -->

## Features

- Authenticated user accounts
- Single-page app
- Add, edit, update, remove restaurants with image upload
- Search for restaurants in the local area
- Reservations
- Favorites
- Reviews

<!-- ![alttag](rest show page) -->

## Design

InstaRes was planned and created in little less than two weeks time. The planning process involved creating [wireframes][wireframes], a sample frontend [state][state], and a [database schema][database schema]. One feature was carried out from back to front entirely before moving on to another.

The backend is implemented almost exactly how the original proposal schema describes. By providing API endpoints, the backend communicates with the frontend through AJAX requests and responses. On the frontend, React.js is used alongside the Redux cycle, allowing for a quick, efficient, and enjoyable user experience.

Images used throughout the application are hosted on [Cloudinary][cloudinary].

## Future Implementation

Future steps include:

### Location Search

Allow users to search for any location and return restaurants within a default range utilizing Google's autocomplete search API.

### Notifications and Email Confirmation

Confirm with users before making reservations, creating or updating restaurants, or deleting restaurants. Email users confirmations upon all of the above actions.

### Google Maps Integration

Provide a visible map for users utilizing Google Maps API, allowing them to better decide where to make a reservation at.

### Review Histogram

Provide review data in a visually appealing format for both regular users as well as for restaurant hosts.

### User Point System

Implement a reward system for users to cash in on prizes and discounts depending on how much they use the site.

[instares]: http://www.instares.space
[opentable]: http://www.opentable.com
[cloudinary]: http://www.cloudinary.com
[wireframes]: ./docs/wireframes
[state]: ./docs/sample-state.md
[database schema]: ./docs/schema.md
