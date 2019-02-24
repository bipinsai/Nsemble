// @Desc Require the nescessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const passport = require('passport');

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport.js')(passport);

//Use Routes
app.use('/api/user',users);
app.use('/api/profile',profile);



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})