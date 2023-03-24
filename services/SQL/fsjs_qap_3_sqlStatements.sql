CREATE TABLE menu (
  item_id INT PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  item_price DECIMAL(10, 2) NOT NULL
);

-- inserting values into menu table --

INSERT INTO menu (item_id, item_name, item_price) VALUES (1, 'Double Cheeseburger', 9.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (2, 'Poutine', 6.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (3, 'Touton Tacos', 10.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (4, 'Chicken Wings', 8.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (5, 'Chicken Fingers', 7.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (6, 'Soup & salad', 12.99);
INSERT INTO menu (item_id, item_name, item_price) VALUES (7, 'Jigs Dinner', 13.99);


SELECT * FROM menu;

SELECT *
FROM menu
ORDER BY item_price ASC, item_id ASC;

UPDATE menu
SET item_name = 'Hamburger & Fries', item_price = 8.99
WHERE item_id = 1;

DELETE FROM menu
WHERE item_id = 1;

