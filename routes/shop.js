const express = require('express');
const { getProducts, getIndex, getProductDetails, getCart, getOrders, getProduct, getProductsByCategoryId } = require('../controllers/shop');
const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productid", getProduct);

router.get("/categories/:categoryid", getProductsByCategoryId);

router.get("/details", getProductDetails);

router.get("/cart", getCart);

router.get("/orders", getOrders);

module.exports = router;
