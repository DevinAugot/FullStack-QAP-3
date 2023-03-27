const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;

global.DEBUG = true;
app.set("view engine", "ejs");
app.use(express.static("public"));



// express.urlencoded and methodOverride are super import do some research!
app.use(express.urlencoded({ extended: true })); // This is important!
app.use(methodOverride("_method")); // So is this!

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "for Adding/Editing/Deleting Menu Items" });
});
app.get("/about", (request, response) => {
  response.render("about.ejs");
});

// MenuJson Page route
app.get("/menuJson", (request, response) => {
  response.render("menuJson.ejs");
});


const menuRouter = require("./routes/api/menu");
app.use("/menu", menuRouter);

// anything beginning with "/api" will go into this
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});
