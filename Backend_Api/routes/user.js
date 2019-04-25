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
        const newUser = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
        });
        res.json(newUser);
        // hasing the password and updating the hash in db
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
            console.log("Sending token");
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

const getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

router.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let token = getToken(req.headers);
        if(token){
            res.json(req.user);
        }else{
            console.log("Token not found");
            return res.status(403).send({success:false,msg:'Unauthorized'});
        }
    }
);

router.get(
    "/welcome",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let token = getToken(req.headers);
        if(token){
            User.find({isNgo : true})
                .then(result=>{
                    res.json(result);
                })
        }else{
            console.log("Token not found");
            return res.status(403).send({success:false,msg:'Unauthorized'});
        }
    }
);

/** ONLY USE WHEN NEED TO INSERT MOCK DATA */
// var fs = require("fs");
// var data = fs.readFileSync('MOCkUSER.json','utf-8');
// var words = JSON.parse(data);
// for(let i=0;i<words.length;i++){
//     const newUser = new User({
//         name: words[i].name,
//         email: words[i].email,
//         password: words[i].password,
//         // isNgo: true
//     });
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) throw err;
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             newUser.password = hash;
//             newUser
//             .save()
//             .then(user => {
//                 console.log(i," " ,user);
//             })
//             .catch(err => {
//                 console.log(err);
//                 // res.json(err);
//             });
//         });
//     });
// }

module.exports = router;