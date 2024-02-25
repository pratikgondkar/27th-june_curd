const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route");
const {connectToDatabase} = require("./config/dbConnection");
require("dotenv").config()
PORT=3000;

const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route



app.listen(PORT, async ()=>{
   await connectToDatabase()
    console.log(`Server Started on PORT NO:${PORT}`)
});