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

-- Example selects (Will create a new column for data)
-- Counts the number of ratings in the reviews table
SELECT COUNT(rating) FROM reviews;

-- Returns the minimum value for rating in the reviews table
SELECT MIN(rating) FROM reviews;

-- Returns the maximum value for rating in the reviews table
SELECT MAX(rating) FROM reviews;

-- Returns the average value for ratings in the reviews table with new name (AS)
SELECT TRUNC(AVG(rating), 0) AS average_ratings FROM reviews;

-- Returns the average rating for a specific restaurant by id
SELECT TRUNC(AVG(rating)) AS average_rating FROM reviews WHERE restaurant_id = 2;

-- Returns the number of reviews for a specific restaurant by id
SELECT COUNT(rating) AS review_count FROM reviews WHERE restaurant_id = 2;

-- Returns the number of reviews for a specific location
SELECT location, count(location) FROM restaurants GROUP BY location;

-- Join the reviews table with the restaurants table
SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id; 