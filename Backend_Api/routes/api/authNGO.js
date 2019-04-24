/*  
    This file will contain the information about the Ngoname
    passwords (Authentication) of normal Ngos (donators/volunteers).
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
const NGO = require("../../models/Ngo.js");

// @Route   GET /api/Ngo/test
// @desc    tests Ngo route
// @Access  public
router.get("/test", (req, res) => {
  res.json({ message: "Ngos works," });
});

// @Route   GET /api/Ngo/register
// @desc    register page
// @Access  public
router.post("/register", (req, res) => {
  
});

// @Route   GET /api/Ngo/login
// @desc    Login Ngo / JWT Token
// @Access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  
});

// @Route   GET /api/Ngo/current/id
// @desc    Ngo Profile
// @Access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.user.id;
    // name: req.ngo.name
    NGO.findById(id).then(ngo => {
      res.json({
        name: ngo.name
      });
    });
  }
);

// Exporting router so that it can be used as a router.
module.exports = router;
