const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Received registration data:', req.body); 

  const newUser = new User({
    username,
    email,
    password
  });

  try {
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error('Error during user registration:', err); 
    res.status(400).send('Error during user registration: ' + err.message);
  }
});

module.exports = router;
