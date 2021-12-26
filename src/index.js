const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine: handlebars } = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes");
// const db = require("./config/db");
const mongoose = require('mongoose');

//Connect to db
// db.connect();
mongoose.connect(`mongodb+srv://dat12012002:dangtiendat1201@cluster0.bvj7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(() => {
          console.log('Database connected');
        })

app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //gui du lieu tu code JavaScript
//Template engine

app.engine(".hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Router init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
app.use(express.static(__dirname + "/public"));
