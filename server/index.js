const dotenv = require('dotenv');
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const crypto = require('crypto');

dotenv.config();

const s3 = new S3Client({
  credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_BUCKET_REGION
});

const bucketName = process.env.AWS_BUCKET_NAME;

const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const userRoute = require("./routes/users")

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://ecc-final-static.s3-website-us-east-1.amazonaws.com");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json());
app.use(cookieParser());

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex"); 

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    
    const params = {
      Bucket: bucketName,
      Key: randomImageName(),
      Body: file.buffer,
      ContentType: file.mimetype,
    }

    const command = new PutObjectCommand(params);

    try {
      console.log('Region', process.env.AWS_BUCKET_REGION);
      console.log('Bucket', bucketName);
      await s3.send(command);
    }
    catch (err) {
      console.log(err);
    };
    

    res.send({'imgUrl': `https://${bucketName}.s3.amazonaws.com/${params.Key}`});
})

app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/user", userRoute)

app.get("/", (req, res) => res.json("ECC Final Project API is running"))
app.get("/api/test", (req, res) => res.json("This is the test endpoint. Congrats it works! 🎉"))

const port = process.env.PORT || 8800;

app.listen(port, ()=> {
    console.log("Server is Running on port " + port)
})