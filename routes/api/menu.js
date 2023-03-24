const express = require("express");
const router = express.Router();
const menuDal = require("../../services/pg.menu.dal");

router.get("/", async (req, res) => {
  const theMenu = [
    { item_id: 1, item_name: "Hamburger & Fries", item_price: "8.99" },
    { item_id: 2, item_name: "Poutine", item_price: "6.99" },
    { item_id: 3, item_name: "Touton Tacos", item_price: "10.99" },
  ];
  try {
    // let theMenu = await menuDal.getMenu();
    if (DEBUG) console.table(theMenu);
    res.render("menu", { theMenu });
  } catch {
    res.render("503");
  }
});

// router.get('/:id', async (req, res) => {
//     // const anActor = [
//     //     {first_name: 'Regina', last_name: 'King'}
//     // ];
//     try {
//         let anActor = await actorsDal.getActorByActorId(req.params.id); // from postgresql
//         if (anActor.length === 0)
//             res.render('norecord')
//         else
//             res.render('actor', {anActor});
//     } catch {
//         res.render('503');
//     }
// });

// router.get('/:id/replace', async (req, res) => {
//     if(DEBUG) console.log('actor.Replace : ' + req.params.id);
//     res.render('actorPut.ejs', {firstName: req.query.firstName, lastName: req.query.lastName, theId: req.params.id});
// });

// router.get('/:id/edit', async (req, res) => {
//     if(DEBUG) console.log('actor.Edit : ' + req.params.id);
//     res.render('actorPatch.ejs', {firstName: req.query.firstName, lastName: req.query.lastName, theId: req.params.id});
// });

// router.get('/:id/delete', async (req, res) => {
//     if(DEBUG) console.log('actor.Delete : ' + req.params.id);
//     res.render('actorDelete.ejs', {firstName: req.query.firstName, lastName: req.query.lastName, theId: req.params.id});
// });

// router.post('/', async (req, res) => {
//     if(DEBUG) console.log("actors.POST");
//     try {
//         await actorsDal.addActor(req.body.firstName, req.body.lastName );
//         res.redirect('/actors/');
//     } catch {
//         // log this error to an error log file.
//         res.render('503');
//     }
// });

// // PUT, PATCH, and DELETE are part of HTTP, not a part of HTML
// // Therefore, <form method="PUT" ...> doesn't work, but it does work for RESTful API

// router.put('/:id', async (req, res) => {
//     if(DEBUG) console.log('actors.PUT: ' + req.params.id);
//     try {
//         await actorsDal.putActor(req.params.id, req.body.firstName, req.body.lastName);
//         res.redirect('/actors/');
//     } catch {
//         // log this error to an error log file.
//         res.render('503');
//     }
// });
// router.patch('/:id', async (req, res) => {
//     if(DEBUG) console.log('actors.PATCH: ' + req.params.id);
//     try {
//         await actorsDal.patchActor(req.params.id, req.body.firstName, req.body.lastName);
//         res.redirect('/actors/');
//     } catch {
//         // log this error to an error log file.
//         res.render('503');
//     }
// });
// router.delete('/:id', async (req, res) => {
//     if(DEBUG) console.log('actors.DELETE: ' + req.params.id);
//     try {
//         await actorsDal.deleteActor(req.params.id);
//         res.redirect('/actors/');
//     } catch {
//         // log this error to an error log file.
//         res.render('503');
//     }
// });

module.exports = router;
