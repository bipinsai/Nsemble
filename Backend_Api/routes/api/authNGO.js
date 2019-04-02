/*  
    This file will contain the information about the Ngoname
    passwords (Authentication) of normal Ngos (donators/volunteers).
*/

//Require the nescessary modules  
const express = require('express'); 
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//Require self made modules
const keys = require('../../config/keys.js');
const Ngo = require('../../models/Ngo.js');

// @Route   GET /api/Ngo/test
// @desc    tests Ngo route
// @Access  public
router.get('/test',(req,res)=>{
    res.json({message: "Ngos works,"});
})

// @Route   GET /api/Ngo/register
// @desc    register page
// @Access  public
router.post('/register',(req,res)=>{
    Ngo.findOne({email: req.body.email})
        .then((Ngo)=>{
            //finding if given email already registered
            if(Ngo){
                return res.status(400).json({email: "Already Exists"});
            }else{

                //Creating new Ngo if email not already registered
                const newNgo = new Ngo({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                })
                
                //hasing the password and updating the hash in db
                bcrypt.genSalt(10,(err,salt)=>{
                    if(err) throw err;
                    bcrypt.hash(newNgo.password,salt,(err,hash)=>{
                        newNgo.password = hash;
                        newNgo.save()
                            .then((Ngo)=>{
                                res.json(Ngo);
                            })
                            .catch(err =>{
                                console.log(err);
                            })
                    })
                })
            } 
        })
})

// @Route   GET /api/Ngo/login
// @desc    Login Ngo / JWT Token
// @Access  Public
router.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    Ngo.findOne({email})
        .then((Ngo)=>{
            if(!Ngo){
                return res.status(404).json({email: "Ngo not found"})
            }
            //Ngo found then check password.
            bcrypt.compare(password , Ngo.password)
                .then(isMatch =>{
                    if(isMatch){
                        //Create Payload
                        const payload = {name : Ngo.name,id : Ngo.id};

                        //Sign Token
                        jwt.sign(payload,keys.secretKey, {expiresIn: 86400}, (err,token) =>{
                            if(err)throw err;
                            res.json({
                                //Using Bearer authentication
                                token: 'Bearer ' + token,
                            })
                        })
                    } else{
                        return res.status(400).json({password: "Incorrect Password"});
                    }
                })
        })
})

// @Route   GET /api/Ngo/current/id
// @desc    Ngo Profile
// @Access  Private
router.get('/current',passport.authenticate('jwt',{session: false}),(req,res)=>{
    res.json({
        id: req.Ngo.id,
        name: req.Ngo.name,
        email: req.Ngo.email,
    })
})

// Exporting router so that it can be used as a router.
module.exports = router; 
