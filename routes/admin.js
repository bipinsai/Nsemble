const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Atharva:3atharva@nsemble-hna11.mongodb.net/test?retryWrites=true");

//Require self made modules
const User = require("../models/User.js");
const Cart = require("../models/Cart");

router.get("/dashboard",(req,res)=>{
    console.log("In admin");
    let donationSum = 0;
    let nSemblers = 0;
    let ngos = 0;
    User.find({})
        .then(result=>{
            for(let i=0;i<result.length;i++){
                donationSum += result[i].donation.length;
                if(result[i].isNsembler === true && result[i].isNgo === false){
                    nSemblers ++;
                }
                if(result[i].isNgo === true){
                    ngos++;
                }
            }
            res.json({
                nSemblers,
                donationSum,
                ngos,
                result
            })
        })
})  

module.exports = router;