CREATE TABLE menu (
  item_id INT PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  item_price DECIMAL(10, 2) NOT NULL
);

ALTER TABLE IF EXISTS public."menu"