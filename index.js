const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js")

const compass_str = "mongodb://localhost:27017/"
// const atlas_string = "mongodb+srv://joshbb412_db_user:ihopeitworks@cluster0.nvtytwk.mongodb.net/?appName=Cluster0"

mongoose.connect(compass_str)
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