const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require('path');
const { get404Page } = require('./controllers/errors');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(get404Page)

app.listen(3000, () => {
    console.log("Server started in http://localhost:3000/");
});