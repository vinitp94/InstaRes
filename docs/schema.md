# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## restaurants
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
name              | string    | not null
address           | string    | not null
city_name         | string    | not null
state             | string    | not null
zip_code          | string    | not null
website_url       | string    | not null
category          | string    | not null
description       | string    | not null
price             | integer   | not null
image_urls        | string    | default: [], null: false, array: true

## reservations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
party_size      | integer   | not null
time_slot       | datetime  | not null
user_id         | integer   | not null, foreign key (references users), indexed
restaurant_id   | integer   | not null, foreign key (references restaurants), indexed

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rating          | integer   | not null
body            | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed
restaurant_id   | integer   | not null, foreign key (references restaurants), indexed
