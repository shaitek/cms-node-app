const express = require('express');
const jwt = require('jsonwebtoken');
const router  = express.Router();
const AuthHandler = require('../handler/authHandler');

router.post('/login', (req, res, next)=>{
    res.send("User loggedin.")
    //Service layer - contains logic
    //Repository - Mongo implementation/any other database implementation
})

router.post('/register', (req, res, next)=>{
    const email = req.body.emasil;
    const password = req.body.password;
    req.user = {email, password};
    res.send("User Registered.")
})


router.get('/account/:id', (req, res)=>{
    const authHandler = new AuthHandler();
    const account = authHandler.getAccount();
    res.json("Account : "+account);
})

module.exports.authRoutes = router;