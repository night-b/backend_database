const productModel = require('../model/productModel');
const userModel = require('../model/userModel');
const cloudinary = require('../config/cloudinary');

//create/ upload
const uploadProduct = async (req, res) => {
    try{
        const getUserID = await userModel.findById(req.params.userId)
        const { name, description, price, category, stock, quantity, image} = req.body

        const product = await productModel.create(
            {
             name, description, price, category, stock, quantity, image
            })

        await getUserID.product.push(product._id)
        await getUserID.save()

        if(!req.file){
            return res.status(400).json({
                message: "Image is required...please upload an image"
            })
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = result.secure_url

        return res.status(201).json(
            {
                message: 'Product uploaded successfully', product
            })   
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

//get all
const getAllProducts = async (req, res) => {
    try{
        const getAll= await userModel.find()
        return res.status(200).json({
            message: 'All products fetched successfully',
            data: getAll
        })     
       } catch (error) {
        return res.status(500).json({message: error.message})
       }
}

module.exports = {uploadProduct, getAllProducts}