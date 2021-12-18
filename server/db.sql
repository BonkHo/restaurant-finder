-- Creates restuarant_finder database
CREATE DATABASE restaurant_finder;

-- Creates table for restaurants and their information
CREATE TABLE restaurants (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INTEGER NOT NULL check(price_range >= 1 and price_range <= 5)
);

-- Creates a table to store reviews
CREATE TABLE reviews(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  restaurant_id BIGINT REFERENCES restaurants(id) NOT NULL,
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INTEGER NOT NULL check(rating >= 1 and rating <= 5)
);


-- Example insert into restaurants table
INSERT INTO restaurants (name, location, price_range) values ('Pizza Hut', 'New York', 1);
INSERT INTO restaurants (name, location, price_range) values ('Wendys', 'Denver', 1);
INSERT INTO restaurants (name, location, price_range) values ('McDonalds', 'Chicago', 1);
INSERT INTO restaurants (name, location, price_range) values ('Taco Bell', 'Los Angeles', 1);

-- Example insert into reviews table
INSERT INTO reviews (restaurant_id, name, review, rating) values (1, 'John', 'This is a great pizza place', 5);