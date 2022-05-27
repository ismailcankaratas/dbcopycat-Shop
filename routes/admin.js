const express = require('express');
const { getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct, postDeleteProduct } = require('../controllers/admin');
const router = express.Router();

router.get("/products", getProducts);

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

router.get("/products/:productid", getEditProduct);

router.post("/products", postEditProduct);

router.post("/delete-product", postDeleteProduct);


module.exports = router;