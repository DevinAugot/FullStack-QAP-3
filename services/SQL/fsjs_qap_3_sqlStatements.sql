
SELECT * FROM menu;

SELECT *
FROM menu
ORDER BY item_price ASC, item_id ASC;

UPDATE menu
SET item_name = 'Hamburger & Fries', item_price = 8.99
WHERE item_id = 1;

DELETE FROM menu
WHERE item_id = 1;

