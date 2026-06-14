require("dotenv").config();

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("MongoDB connection error:", err))

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

// Image storage engine

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images')  
    },
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload endpoint for images

app.post('/upload', upload.single('product'), (req,res)=>{

})


app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on Port " + port)
    } else {
        console.log("Error: " + error)
    }
})