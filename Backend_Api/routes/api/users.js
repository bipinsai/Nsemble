// @Desc This file will contain the information about the username
// passwords (Authentication) of normal users (donators/volunteers).

// @Desc Require the nescessary modules  
const express = require('express'); 
const router = express.Router();

// @Route   GET /api/user/test
// @desc    tests user route
// @Access  public
router.get('/test',(req,res)=>{
    res.json({message: "Users works,"});
})


// Exporting router so that it can be used as a router.
module.exports = router; 
