const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router
  .route("/")
  .get(productController.getAllProducts)//get all tours
  .post(productController.createProduct);
   router
  .route("/:id")
  .patch(productController.updateProduct)
  .get(productController.getProduct)
  .delete(productController.deleteProduct);

  module.exports = router;