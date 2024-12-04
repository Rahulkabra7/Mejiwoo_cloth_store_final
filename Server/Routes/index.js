// create some routes wich can recive the incoming request

const express = require('express');
const router = express.Router();

const {
    createInfluencer
  } = require('../Controllers/InfluencerController.js');


const categoryController = require('../Controllers/category.js');
const searchController = require('../Controllers/searchcat.js');


router.get('/api/products/:category', categoryController.getproductsBycategory);
router.get('/api/search/:product', searchController.getProductsBySearchCategory);
// router.post('./api/createInfluencer').post(createUserController.createUser);
router.route('/api/createInfluencer').post(createInfluencer);




module.exports = router;