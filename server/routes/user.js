const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
   const user = await User.findOne({ name: req.body.name });
   if (user) return res.status(422).send('Mail Exists);');

   bcrypt.hash(req.body.password, 10, async (err, hash) => {
      const user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: hash,
      });
      res.send(user);
   });
});

router.post('/login', async (req, res) => {
   const user = await User.findOne({ name: req.body.name });
   if (!user) return res.status(401).send('User not Found');

   const validPass = await bcrypt.compare(req.body.password, user.password);
   if (!validPass)
      return res
         .status(400)
         .send({ message: 'Invalid Password', authenticated: false });

   const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.TOKEN_SECRET
   );
   res.header('auth-token', token).send({
      user: user.name,
      token: token,
      authenticated: true,
   });
});

module.exports = router;
