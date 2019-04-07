// @Desc Require the nescessary modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const auth = require("./routes/api/auth.js");
const profile = require("./routes/api/profile.js");
const passport = require("passport");
const authNGO = require("./routes/api/authNGO.js");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport.js")(passport);

//Use Routes
<<<<<<< HEAD
app.use('/user',auth);
app.use('/ngo',auth);
app.use('/profile',profile);


=======
app.use("/user", auth);
app.use("/ngo", authNGO);
app.use("/profile", profile);
>>>>>>> 8dda06e4de606f7bfacbf7a12f81269b678f87b0

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
