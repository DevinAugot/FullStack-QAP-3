const dal = require("./pdb");

//get all actors. by ID
var getMenu = function() {
  if(DEBUG) console.log("menu.pg.dal.getMenu()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM menu \
    ORDER BY item_id ASC;"
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};
 // GET all
var getMenuItemByMenuId = function(id) {
  if(DEBUG) console.log("menu.pg.dal.getMenuItemByMenuId()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT item_id AS _id, item_name, item_price FROM menu WHERE item_id = $1";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};

// // this adds to the database (insert) POST
var addMenuItem = function(item_id, item_name,item_price) {
  if(DEBUG) console.log("menu.pg.dal.addMenuItem()");
  return new Promise(function(resolve, reject) {
    const sql = "INSERT INTO menu (item_id, item_name, item_price) \
        VALUES ($1, $2, $3);";
    dal.query(sql, [item_id, item_name, item_price], (err, result) => {
      if (err) {
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

// // PUT
// var putActor = function(id, fname, lname) {
//   if(DEBUG) console.log("actors.pg.dal.putActor()");
//   return new Promise(function(resolve, reject) {
//     const sql = "UPDATE public.actor SET first_name=$2, last_name=$3 WHERE actor_id=$1;";
//     dal.query(sql, [id, fname, lname], (err, result) => {
//       if (err) {
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//     }); 
//   });
// };

// // UPDATE
// var patchActor = function(id, fname, lname) {
//   if(DEBUG) console.log("actors.pg.dal.patchActor()");
//   return new Promise(function(resolve, reject) {
//     const sql = "UPDATE public.actor SET first_name=$2, last_name=$3 WHERE actor_id=$1;";
//     dal.query(sql, [id, fname, lname], (err, result) => {
//       if (err) {
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//     }); 
//   });
// };

// /// DELETE
// var deleteActor = function(id) {
//   if(DEBUG) console.log("actors.pg.dal.deleteActor()");
//   return new Promise(function(resolve, reject) {
//     const sql = "DELETE FROM public.actor WHERE actor_id = $1;";
//     dal.query(sql, [id], (err, result) => {
//       if (err) {
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//     }); 
//   });
// };

module.exports = {
    getMenu,
    getMenuItemByMenuId,
    addMenuItem,
    // putActor,
    // patchActor,
    // deleteActor,
}