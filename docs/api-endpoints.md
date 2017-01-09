# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Restaurants

- `GET /api/restaurants`
- `GET/api/restaurants/:id`
- `POST /api/restaurants`
- `PATCH /api/restaurants/:id`
- `DELETE /api/restaurants/:id`

### Reservations

- `GET /api/restaurants/:id/reservations`
- `POST /api/restaurants/:id/reservations`
- `DELETE /api/restaurants/:id/reservations/:id`

### Reviews

- `GET /api/restaurants/:id/reviews`
- `POST /api/restaurants/:id/reviews`
- `PATCH /api/restaurants/:id/reviews/:id`
- `DELETE /api/restaurants/:id/reviews/:id`
