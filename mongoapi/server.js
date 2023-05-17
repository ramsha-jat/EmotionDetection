const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

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


const User = mongoose.model("User", UserSchema);


const uri = "mongodb+srv://ramshabscsf19:mishu_jat1@emotiondetection.sjnysw5.mongodb.net/Emotion";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

