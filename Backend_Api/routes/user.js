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
const Cart = require("../models/Cart");

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
        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          // console.log("Sending token");
          res.json({
            //Using Bearer authentication
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(400).json({ password: "Incorrect Password" });
      }
    });
  });
});

router.post(
  "/donate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log("In Post");
    const itemType = req.body.itemType,
      otherItems = req.body.otherItems,
      condition = req.body.condition;

    /* donation = {
    itemType,
    otherItems,
    condition
  }; */

    let newDonation = new Cart({
      itemType,
      otherItems,
      condition
    });

    newDonation
      .save()
      .then(result => {
        // console.log("Hello \n", result);
        res.json({ success: true, status: 200, id: result._id });
      })
      .catch(err => {
        if (err) throw err;
      });
  }
);

router.get(
  "/cart",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Cart.find({}, (err, cargo) => {
      let cargoMap = {};

      cargo.forEach(function(ob) {
        cargoMap[ob._id] = ob;
      });

      console.log(cargoMap);
      res.json({ cart: cargoMap });
    });
  }
);

router.delete(
  "/cart",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log("this is the req\n", req);
    Cart.findByIdAndDelete({ _id: req.body._id }, (err, cargo) => {
      if (err) res.json({ success: false, status: 500 });
      console.log("successfully deleted the cargo\n", cargo);
      res.json({ success: true, status: 200 });
    });
  }
);

router.post(
  "/donated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user._id)
      .then(model => {
        req.body.arr.forEach(elem => {
          model.donation.push(elem);
        });

        return model;
      })
      .then(model => {
        return model.save();
      })
      .then(updatedModel => {
        console.log("\nmodel updated", updatedModel);
        req.body.arr.forEach(element => {
          console.log(element._id);
          Cart.findByIdAndDelete({ _id: element._id }, (err, cargo) => {
            if (err) throw err;
            console.log("\ndeleted\n", cargo._id);
          });
        });
        res.json({
          msg: "model updated",
          status: 200,
          updatedModel
        });
      })
      .catch(err => {
        res.send(err);
      });
  }
);

const getToken = function(headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(" ");
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
    if (token) {
      res.json(req.user);
    } else {
      console.log("Token not found");
      return res.status(403).send({ success: false, msg: "Unauthorized" });
    }
  }
);

router.get(
  "/welcome",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let token = getToken(req.headers);
    if (token) {
      // console.log(req.user);
      User.find({ isNgo: true }).then(result => {
        res.json(result);
      });
    } else {
      console.log("Token not found");
      return res.status(403).send({ success: false, msg: "Unauthorized" });
    }
  }
);

/** ONLY USE WHEN NEED TO INSERT MOCK DATA */
//  var fs = require("fs");
// var data = fs.readFileSync("MOCK_NGO.json", "utf-8");
// var words = JSON.parse(data);
// for (let i = 0; i < words.length; i++) {
// if(i%13===4){
//   const newUser = new User({
//     name: words[i].name,
//     email: words[i].email,
//     password: words[i].password,
//     // isNgo: true
//     logo: words[i].logo,
//     isNsembler: true
//   });
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) throw err;
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       newUser.password = hash;
//       newUser
//         .save()
//         .then(user => {
//           console.log(i, " ", user);
//         })
//         .catch(err => {
//           console.log(err);
//           // res.json(err);
//         });
//     });
//   });
// }else
//   {
//     const newUser = new User({
//       name: words[i].name,
//       email: words[i].email,
//       password: words[i].password,
//       logo: words[i].logo,
//       isNgo: true
//     });
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) throw err;
//       bcrypt.hash(newUser.password, salt, (err, hash) => {
//         newUser.password = hash;
//         newUser
//           .save()
//           .then(user => {
//             console.log(i, " ", user);
//           })
//           .catch(err => {
//             console.log(err);
//             // res.json(err);
//           });
//       });
//     });
//   }
// }

module.exports = router;
