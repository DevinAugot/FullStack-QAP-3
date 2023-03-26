const express = require("express");
const router = express.Router();
const menuDal = require("../../services/pg.menu.dal");

// // menu JSON data rendering
router.get("/menuJson", async (req, res) => {
  try {
    let theMenu = await menuDal.getMenuJson();
  
    console.log(theMenu); // to check the value of theMenu
    res.json(theMenu); // send theMenu as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving menu data");
  }
});

// This works grabs entire menu
router.get("/", async (req, res) => {
  // const theMenu = [
  //   { item_id: 1, item_name: "Hamburger & Fries", item_price: "8.99" },
  //   { item_id: 2, item_name: "Poutine", item_price: "6.99" },
  //   { item_id: 3, item_name: "Touton Tacos", item_price: "10.99" },
  // ];
  try {
    let theMenu = await menuDal.getMenu();
    if (DEBUG) console.table(theMenu);
    res.render("menu", { theMenu });
  } catch {
    res.render("503");
  }
});

// This works grab menu item by id
router.get("/:id", async (req, res) => {
  // const theMenu = [
  //     {item_id: 1 , item_name: 'Hamburger & Fries', item_price: '8.99'}
  // ];
  try {
    let theMenu = await menuDal.getMenuItemByMenuId(req.params.id); // from postgresql
    if (theMenu.length === 0) res.render("norecord");
    else res.render("menuID", { theMenu });
  } catch {
    res.render("503");
  }
});

// POST this works and posts new menu item

router.post("/", async (req, res) => {
  if (DEBUG) console.log("menu.POST");
  try {
    await menuDal.addMenuItem(
      req.body.item_id,
      req.body.item_name,
      req.body.item_price
    );
    res.redirect("/menu/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

// PUT
router.get("/:id/replace", async (req, res) => {
  if (DEBUG) console.log("menu.Replace : " + req.params.id);
  res.render("menuPut.ejs", {
    item_name: req.query.item_name,
    item_price: req.query.item_price,
    theId: req.params.id,
  });
});
// DELETE Works!
router.get("/:id/delete", async (req, res) => {
  if (DEBUG) console.log("menu.Delete : " + req.params.id);
  res.render("menuDelete.ejs", {
    item_id: req.query.item_id,
    item_name: req.query.item_name,
    item_price: req.query.item_price,
    theId: req.params.id,
  });
});

router.get("/:id/edit", async (req, res) => {
  if (DEBUG) console.log("menu.Edit : " + req.params.id);
  res.render("menuPatch.ejs", {
    item_name: req.query.item_name,
    item_price: req.query.item_price,
    theId: req.params.id,
  });
});

router.put("/:id", async (req, res) => {
  if (DEBUG) console.log("menu.PUT: " + req.params.id);
  try {
    await menuDal.putMenuItem(
      req.params.id,
      req.body.item_name,
      req.body.item_price
    );
    res.redirect("/menu/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

// PATCH WORKS (replace)!
router.patch("/:id", async (req, res) => {
  if (DEBUG) console.log("menu.PATCH: " + req.params.id);
  try {
    await menuDal.patchMenuItem(
      req.params.id,
      req.body.item_name,
      req.body.item_price
    );
    res.redirect("/menu/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

router.delete("/:id", async (req, res) => {
  if (DEBUG) console.log("menu.DELETE: " + req.params.id);
  try {
    await menuDal.deleteMenuItem(req.params.id);
    res.redirect("/menu/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

module.exports = router;
