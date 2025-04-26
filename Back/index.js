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
const axios = require('axios');

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

const CLIENT_ID = '1000.T33QWGZILUG46ORZTGMULG3Y8ZVA5K';
const CLIENT_SECRET = '74d882fe5c44decd57383f4c3ecfb840d1ed771908';
const REFRESH_TOKEN = '1000.2abd1b8631875e3767efef1bfee79a4b.7aa63e5c1263d30e354b721e93a02c97';

// ====== In-memory Token Storage ======
let accessToken = null;
let tokenGeneratedTime = null;

// ====== Function to Refresh Access Token ======
const refreshAccessToken = async () => {
  const response = await axios.post('https://accounts.zoho.in/oauth/v2/token', null, {
    params: {
      refresh_token: REFRESH_TOKEN,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token',
    },
  });

  accessToken = response.data.access_token;
  tokenGeneratedTime = Date.now();
  console.log("✅ New access token generated");

  return accessToken;
};

// ====== Function to Get Valid Access Token ======
const getValidAccessToken = async () => {
  if (!accessToken || !tokenGeneratedTime) {
    console.log("❗ No token available, refreshing...");
    return await refreshAccessToken();
  }

  const currentTime = Date.now();
  const tokenAge = (currentTime - tokenGeneratedTime) / 1000; // in seconds

  if (tokenAge > 3500) { // If older than ~58 minutes
    console.log("⚠️  Access token expired, refreshing...");
    return await refreshAccessToken();
  }

  console.log("✅ Using existing access token");
  return accessToken;
};

// ====== Example Usage ======
const sendZohoMail = async () => {
  const token = await getValidAccessToken();

  try {
    const response = await axios.post(
      'https://mail.zoho.in/api/accounts/6975452000000002002/messages',
      {
        fromAddress: "plive@plivecreation.icu",
        toAddress: "gautambabariya0125@gmail.com",
        subject: "OTP Verification",
        content: "Your OTP is 12356",
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("📩 Email sent:", response.data);
  } catch (err) {
    console.error("❌ Error sending email:", err.response?.data || err.message);
  }
};

app.get('/send-email', async (req, res) => {
  try {
    await sendZohoMail();
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

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