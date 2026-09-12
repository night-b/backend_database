const userModel = require("../model/userModel.js")
const bcrypt = require("bcrypt")
//  CSSMathProduct
// CREATE USER
//  READ USER
// UPDATE USER
// DELETE USER

const loginUser = async (req, res) =>{
    try{

        const {name, password} = req.body
        const user = await userModel.findOne({name})
        if(!user){
            return res.status(400).json({message: "Are you sure you signed up?"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(404).json({message: "Password is incorrect"})
        }
        return res.status(200).json({message: "login successful"})
    }catch(error){
        return res.status(500).json({message: "user not found"})
    }
}
//creat user
 const createUser = async (req, res) => {
    try{
        const { name, email, password } = req.body
        const genSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, genSalt)
        const user = await userModel.create({
            name, email, password: hashedPassword
        })
        res.status(201).json({
            message: "User created successfully",
            data : user
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//General bget
 const getAllUsers =async (req, res) => {
    try{
        const getAll = await userModel.find()
        return res.status(200).json({
            message: "All users fetched successfully",
            data: getAll
        })
    } catch {error} {
        return res.status(500).json({
            message: error.message
        })
    }
}

//SiNGLE GET
 const getSingleUser = async (req, res) => {
    try{
        const {id} = req.params
        const getSingle = await userModel.findById(id)
        if (!getSingle) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(404).json({
                message: "User fetched successfully",
                data: getSingle
            })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//UPDATE USER:
const updateUser = async (req, res) => {
    try{
        const {Userid} = req.params
        const { name } = req.body
        const update = await userModel.findByIdAndUpdate(userId, {
            name , password
        }, {new: true})

        return res.status(200).json({
            message: "User updated successfully",
            data: update
        })
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//DELETE USER
const deleteUser = async (req, res) => {
    try{
        const {Userid} = req.params
        const deleteUser = await userModel.findByIdAndDelete(userId)

        return res.status(200).json({
            message: "User deleted successfully",
            data: deleteUser
        })
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {loginUser, createUser, getAllUsers, getSingleUser, updateUser, deleteUser}