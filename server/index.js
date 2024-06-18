const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { Sequelize } = require('sequelize');
const dbconfig = require("./config/db.config");

// Connect to database
const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and Resync Database with { force: true }");
    // Init Database
    // initial();
});

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",  // Allow requests from this origin
  methods: ['GET', 'POST'],  // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'access_token'],  // Allow these headers
}));
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.json({ message: "WINDX HR ATTENDANCE" });
  });
  
// routes
require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/major.route")(app);
require("./routes/skill.route")(app);

const PORT = process.env.PORT || 8989;
app.listen(PORT, () => {
    console.log(`WINDX HR ATTENDANCE is running on port ${PORT}.`);
  });