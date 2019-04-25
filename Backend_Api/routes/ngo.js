const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nsemble");

//Require self made modules
const keys = require("../config/keys.js");
const User = require("../models/User.js");

// @Route   GET /api/user/register
// @desc    register page
// @Access  public
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
    //finding if given email already registered
    if (user) {
        return res.status(400).json({ email: "Already Exists" });
    } else {
        //Creating new user if email not already registered
        const newNgo = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isNgo: true
        });
        res.json(newNgo);
        // hasing the password and updating the hash in db
        bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newNgo.password, salt, (err, hash) => {
            newNgo.password = hash;
            newNgo
            .save()
            .then(ngo => {
                res.json(ngo);
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
                success: true,
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

router.get(
    "/profile/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        console.log(req.params.id); 
    oUser.findById(req.params.id)
        .then(result=>{
            res.json(result);
        })
    }
);

module.exports = router;