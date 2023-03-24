const dal = require("./pdb");

//get all actors. by ID
var getMenu = function() {
  if(DEBUG) console.log("actors.pg.dal.getMenu()");
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
// var getActorByActorId = function(id) {
//   if(DEBUG) console.log("actors.pg.dal.getActorByActorId()");
//   return new Promise(function(resolve, reject) {
//     const sql = "SELECT actor_id AS _id, first_name, last_name FROM actor WHERE actor_id = $1";
//     dal.query(sql, [id], (err, result) => {
//       if (err) {
//         // logging should go here
//         if(DEBUG) console.log(err);
//         reject(err);
//       } else {
//         resolve(result.rows);
//       }
//     }); 
//   }); 
// };

// // this adds to the database (insert) POST
// var addActor = function(fname, lname) {
//   if(DEBUG) console.log("actors.pg.dal.addActor()");
//   return new Promise(function(resolve, reject) {
//     const sql = "INSERT INTO public.actor(first_name, last_name) \
//         VALUES ($1, $2);";
//     dal.query(sql, [fname, lname], (err, result) => {
//       if (err) {
//           if(DEBUG) console.log(err);
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//     }); 
//   });
// };

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
    // getActorByActorId,
    // addActor,
    // putActor,
    // patchActor,
    // deleteActor,
}