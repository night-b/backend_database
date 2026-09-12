const express = require('express');
const router = express.Router();
const upload = require('../config/multer')

const { uploadProduct, getAllProducts} = require('../controller/productController')


router.post('/upload/:userid',upload.single('images'), uploadProduct)
router.get('/getall', getAllProducts)

module.exports = router;