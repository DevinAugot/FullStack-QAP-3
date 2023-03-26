const dal = require("./pdb");

// retreive JSON DATA for extra page
var getMenuJson = function() {
  if (DEBUG) console.log("menu.pg.dal.getMenuJson()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM menu \  ORDER BY item_id ASC;";
    dal.query(sql, [], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

//Gets all menu items in ascending order
var getMenu = function () {
  if (DEBUG) console.log("menu.pg.dal.getMenu()");
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT * FROM menu \
    ORDER BY item_id ASC;";
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
// GET's menu item by specified ID
var getMenuItemByMenuId = function (id) {
  if (DEBUG) console.log("menu.pg.dal.getMenuItemByMenuId()");
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT item_id AS _id, item_name, item_price FROM menu WHERE item_id = $1";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        // logging should go here
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// // this adds to the database (SQL insert's) POST
var addMenuItem = function (item_id, item_name, item_price) {
  if (DEBUG) console.log("menu.pg.dal.addMenuItem()");
  return new Promise(function (resolve, reject) {
    const sql =
      "INSERT INTO menu (item_id, item_name, item_price) \
        VALUES ($1, $2, $3);";
    dal.query(sql, [item_id, item_name, item_price], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// PUT updates any item based on sql specs
var putMenuItem = function (item_id, item_name, item_price) {
  if (DEBUG) console.log("menu.pg.dal.putMenuItem()");
  return new Promise(function (resolve, reject) {
    const sql =
      "UPDATE public.menu SET item_name=$2, item_price=$3 WHERE item_id=$1;";
    dal.query(sql, [item_id, item_name, item_price], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// // UPDATE WORKS! also updates any item based on sql specs
var patchMenuItem = function (item_id, item_name, item_price) {
  if (DEBUG) console.log("menu.pg.dal.patchMenuItem()");
  return new Promise(function (resolve, reject) {
    const sql =
      "UPDATE public.menu SET item_name=$2, item_price=$3 WHERE item_id=$1;";
    dal.query(sql, [item_id, item_name, item_price], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// /// DELETE any menu item by sql specs
var deleteMenuItem = function (id) {
  if (DEBUG) console.log("menu.pg.dal.deleteMenuItem()");
  return new Promise(function (resolve, reject) {
    const sql = `DELETE FROM menu WHERE item_id = $1;`;
    dal.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  getMenu,
  getMenuItemByMenuId,
  addMenuItem,
  deleteMenuItem,
  patchMenuItem,
  putMenuItem,
  getMenuJson
};
