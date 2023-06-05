const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const testimonialRoute = require('./routes/testimonials');
const multer = require('multer');
const path = require('path');

dotenv.config();

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGO_URL, options)
    .then(() => console.log("Connection successfull"))
    .catch((err) => console.log(err));

app.use("/images", express.static(path.join(__dirname, "public/images")));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
})

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("file uploaded successfully");
    } catch (err) {
        console.log(err);
    }
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/testimonials", testimonialRoute);

app.listen(8800, () => {
    console.log("Backend server is running! said that Tugce");
});
