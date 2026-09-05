const express = require("express")

const userRoute = express.Router()
const { createUser , deleteUser , getAllUsers , getSingleUser , updateUser 
} = require("../controller/UserController")

userRoute.post("/new-user",createUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/get-one-user/:id", getSingleUser)
userRoute.delete("/delete-user/:Userid", deleteUser)
userRoute.patch("/update-user/:Userid", updateUser)

module.exports = userRoute
