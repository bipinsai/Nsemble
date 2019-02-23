// @Desc Require the nescessary modules
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');

const app = express();

app.get('/',(req,res)=>res.send('Hello'));

//Use Routes
app.use('/api/user',users);
app.use('/api/profile',profile);



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})