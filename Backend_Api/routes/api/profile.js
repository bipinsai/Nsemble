// @Desc This file will contain the information about the bio the 
// address and other such personal details of the user (Donator/volunteer)

// @Desc Require the nescessary modules  
const express = require('express'); 
const router = express.Router();
const passport = require('passport');
require("../../config/passport")(passport);
const User = require('../../models/User.js');

// @Route   GET /api/user/test
// @desc    tests user route
// @Access  public
router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    let token = getToken(req.headers);
    if(!token){
        res.status(403).end({logged: "Not Logged In"});
    }
})

router.post('/donate',passport.authenticate('jwt',{session:false}),(req,res)=>{
    let token = getToken(req.headers);
    if(!token){
        res.status(400).end();
    }else{
        User.findById(req.user.id)
            .then((user)=>{
                
            })
    }
})




// Exporting router so that it can be used as a router.
module.exports = router; 