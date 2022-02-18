const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Item');
const verifyToken = require('../middleware/verify');

router.get('/store', async (req, res) => {
   const products = await Product.find({});
   res.send(products);
});

router.post('/store', verifyToken, async (req, res) => {
   try {
      const product = await Product.create(req.body);
      res.status(200).json({
         message: 'Product Submitted',
         status: true,
         product: product,
      });
   } catch (error) {
      res.status(400).json({
         message: error.message,
         status: false,
      });
   }
});

router.delete('/store/:id', verifyToken, async (req, res) => {
   try {
      const product = await Product.findByIdAndRemove({ _id: req.params.id });
      res.status(200).json({
         message: 'Product Deleted',
         status: true,
         product: product,
      });
   } catch (error) {
      res.status(400).json({
         message: error.message,
         status: false,
      });
   }
});

router.put('/store/:id', verifyToken, async (req, res) => {
   try {
      const product = await Product.findByIdAndUpdate(
         { _id: req.params.id },
         req.body
      );
      console.log(product);
      res.status(200).json({
         message: 'Product Updated',
         status: true,
         product: product,
      });
   } catch (error) {
      res.status(400).json({
         message: error.message,
         status: false,
      });
   }
});

module.exports = router;
