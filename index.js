const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");

// const compass_str = "mongodb://localhost:27017/TODO"
const atlas_string = "mongodb://joshbb412_db_user:ihopeitworks@cluster0.nvtytwk.mongodb.net/?appName=Cluster0"

mongoose.connect(atlas_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express()
const port = 1111

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server is active")
})
app.use("/users", userRoute)
app.listen(port, () => {
    console.log(`server is up and running on port : ${port}`)
})