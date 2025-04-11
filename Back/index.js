const express = require('express');
const routes = require('./route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3000;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST');
    res.setHeader('Access-Control-Max-Age', 2592000);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongo connection..........................
const mongourl = process.env.VITE_MONGO_URL;
const connect = async () => {
    try {
        const database = await mongoose.connect(mongourl)
        console.log("mongo conneted!");
    } catch (error) {
        console.log("error mongo" + error);
    }
}
connect();

cloudinary.config({
    cloud_name: 'delde3vvw',
    api_key: 736574341257319,
    api_secret: 'stUNUlwq3i_-P3LyG2lPFXnHjHU',
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "uploads",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
    },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.status(200).json({
      message: "Upload successful",
      url: req.file.path,
      public_id: req.file.filename,
    });
  });
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});