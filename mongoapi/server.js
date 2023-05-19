const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Create a middleware that parses the request body as JSON.
app.use(express.json());
app.use(cors("*"));

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const ImageSchema = new mongoose.Schema({
    name: String,
    image: Buffer,
    date: Date,
});


const User = mongoose.model("User", UserSchema);
const Image = mongoose.model("Image", ImageSchema);


const uri = "mongodb+srv://ramshabscsf19:mishu_jat1@emotiondetection.sjnysw5.mongodb.net/Emotion";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Define the routes
app.get("/images", async (req, res) => {
    const f = await Image.find({});
    console.log(f)
});

app.get("/images/monthly", async (req, res) => {
    const currentMonth = new Date();
    await Image.find({date: {$gte: currentMonth.toDateString()}}, (err, images) => {
        if (err) {
            res.send(err);
        } else {
            res.json(images);
        }
    });
});

app.get("/images/:id", async (req, res) => {
    const id = req.params.id;
    await Image.findById(id, (err, image) => {
        if (err) {
            res.send(err);
        } else {
            res.json(image);
        }
    });
});

app.post("/images", async (req, res) => {
    const image = req.body; // { name: "image name", image: "image data" }
    const newImage = new Image({
        name: image.name,
        image: image.image,
        date: new Date(),
    }); // Create a new image instances
    const sv = await newImage.save()
    console.log(sv)
    res.json({
        message: "Image saved successfully",
        image: sv,
    });
});


app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body)
    const user = new User({
        name,
        email,
        password,
    });

    try {
        await user.save();
        res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});


app.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    console.log(user)
    if (!user) {
        res.status(401).json({
            success: false,
            message: "Invalid email or password",
        });
        return;
    }


    const isPasswordCorrect = await user.password === password;

    if (!isPasswordCorrect) {
        res.status(401).json({
            success: false,
            message: "Invalid email or password",
        });
        return;
    }


    res.status(200).json({
        success: true,
        name: user.name,
        email: user.email,
        id: user._id,
        message: "User signed in successfully"

    });
});

app.get("/", async (req, res) => {
    res.send("Hello World!");
});


app.listen(3002);

