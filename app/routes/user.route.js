const express = require('express');
let router = express.Router();

const ctrlStd = require('../controllers/auth.controller');

//Map POST request on '/register' uri 
router
.route('/register')
.post(ctrlStd.registration);

//Map POST request on '/login' uri
router
.route('/login')
.post(ctrlStd.login);

module.exports=router;