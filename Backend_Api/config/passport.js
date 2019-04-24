const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");
const NGO = require("../models/Ngo.js");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("Hello\n", jwt_payload);
      NGO.findById(jwt_payload.id).then(user => {
        if (user) {
          return done(null, user);
        }
        // NGO.findById(jwt_payload.id).then(ngo => {
        //   if (ngo) {
        //     return done(null, user);
        //   }
        // });
        console.log("User not found");
        return done(null, false);
      });
    })
  );
};
