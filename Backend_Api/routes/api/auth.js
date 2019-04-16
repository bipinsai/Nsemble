/*  
    This file will contain the information about the username
    passwords (Authentication) of normal users (donators/volunteers).
*/

//Require the nescessary modules
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nsemble");

//Require self made modules
const keys = require("../../config/keys.js");
const User = require("../../models/User.js");

// @Route   GET /api/user/test
// @desc    tests user route
// @Access  public
router.get("/test", (req, res) => {
  res.json({ message: "Users works," });
});

// @Route   GET /api/user/register
// @desc    register page
// @Access  public
router.post("/register", (req, res) => {
  //   res.json(req.body);
  User.findOne({ email: req.body.email }).then(user => {
    //finding if given email already registered
    if (user) {
      return res.status(400).json({ email: "Already Exists" });
    } else {
      //Creating new user if email not already registered
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      //   res.json(newUser);
      //hasing the password and updating the hash in db
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(err => {
              console.log(err);
              res.json(err);
            });
        });
      });
    }
  });
});

// @Route   GET /api/user/login
// @desc    Login User / JWT Token
// @Access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    //User found then check password.
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //Create Payload
        const payload = { name: user.name, id: user.id };

        //Sign Token
        jwt.sign(
          payload,
          keys.secretKey,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) throw err;
            res.json({
              //Using Bearer authentication
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect Password" });
      }
    });
  });
});

// @Route   GET /api/user/current/id
// @desc    User Profile
// @Access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// Exporting router so that it can be used as a router.
module.exports = router;
