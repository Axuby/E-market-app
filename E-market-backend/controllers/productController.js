const fs = require("fs");
const Product = require("../models/productModel");
const catchAsync = require('../utils/catchAsync')


  exports.getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find();//get all products in the DB
    res.status(200).json({
      message: "success",
      results: products.length,
      data: {
        products
      }
    });
});

exports.getProduct= catchAsync(async (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  //const tour = tours.find(el => (el.id = id));
  //To check if tours exists and that id is less than lenght of the tours
  const product = await Product.findById(id); //or Tour.findOne({id:req.params.id})
  if (product) {
    if (id < product.length) {
      res.status(200).json({
        status: "success",
        data: {
          product
        }
      });
    }
  }
  
})


exports.createProduct= catchAsync(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct
            }
          });
    
});

// exports.checkId = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (!req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       message: "Invalid ID",
//       status: "Not found"
//     });
//   }
//   next();
// };

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
  }
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
};

exports.deleteProduct = catchAsync(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
});
