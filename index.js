const express = require('express');
const exphbs = require('express-handlebars');
const path = require("path");


const app = express();

//Handlebars stuff
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/explore', (req, res) => {
  res.render('explore');
})

app.get('/edinburgh-text', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'edinburgh-text.html'));
})

app.get("/france-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "france-text.html"));
});

app.get("/vietnam-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "vietnam-text.html"));
});

app.get("/scotland-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "scotland-text.html"));
});

app.get("/first_of_the_roll", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "first_of_the_roll.html"));
});

app.get("/carbine", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "carbine.html"));
});

app.get("/people", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "people.html"));
});

app.get("/black_and_white", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "black_and_white.html"));
});

app.get("/summer", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "summer.html"));
});

app.get("/travel", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "travel.html"));
});

app.get("/winter", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "winter.html"));
});

app.get("/misc", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "misc.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));