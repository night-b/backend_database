const express = require('express');
const router = express.Router();

const { uploadProduct, getAllProducts} = require('../controller/productController')


router.post('/upload/:userid', uploadProduct)
router.get('/getall', getAllProducts)

module.exports = router;