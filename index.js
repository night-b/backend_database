require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js")
const atlas_str = process.env.ATLAS_STRING
const compass_str = process.env.COMPASS_STRING
mongoose.connect(atlas_str)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express()
const port = 1111

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server is active")
})
app.use("/users", userRoute)
app.use("/products", productRoute)
app.listen(port, () => {
    console.log(`server is up and running on port : ${port}`)
})