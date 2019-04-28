// @Desc Require the nescessary modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const user = require("./routes/user.js");
const ngo = require("./routes/ngo.js");
const admin = require("./routes/admin");
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let cors = require("cors");
app.use(cors());

// passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport.js")(passport);

//Use Routes
app.use("/user", user);
app.use("/ngo", ngo);
app.use("/admin", admin);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(__dirname, "../client", "build", "index.html");
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
