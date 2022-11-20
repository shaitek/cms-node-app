const express = require('express');
const app = express();
// main.js

const {authRoutes} = require('./routes/auth');
const {officeRoutes} = require('./routes/office');
const {cmsRoutes} = require('./routes/cms');

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.use('/api/user', authRoutes);
app.use('/api/offices', officeRoutes);
app.use('/api/cms', cmsRoutes);

app.listen(3000, ()=>{
    console.log("Server is up & running.")
})
