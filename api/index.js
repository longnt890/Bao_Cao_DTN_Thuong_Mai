const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");


const app = express();
const port = process.env.port || 8000;
const mongo_uri = "mongodb+srv://2024801030129:Tainguyenlq.0123@cluster0.2eo3uk9.mongodb.net/";


//Middleware
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({ extends: true, limit: '30mb' }));
app.use(cors());


const jwt = require("jsonwebtoken");



mongoose.connect(mongo_uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    app.get('/register', (req, res) => {
        res.send("Hello World");
    })
    //Listen PORT
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log("Error connecting to MongoBd", err);
});

const User = require("./models/user");
const Order = require("./models/order");


app.post("http://localhost:8000/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();

    } catch (error) {
        console.log("error registering user", error);
        res.status(500).json({ message: "Registration failed" })
    }
});

app.post("/demotest", async (req, res) => {
    const QuestionData = [
            { idTask: 2, content: "My homework at 6:00" },
            { idTask: 3, content: "Go shopping at 7:00" },
            { idTask: 4, content: "Read book at 8:00" },
            { idTask: 5, content: "Write book at 9:00" },
            { idTask: 6, content: " Read book at 10:00" },
            { idTask: 7, content: "ReadBook " },
            { idTask: 8, content: "Demo" },
        ];
 
        const Question = await User.insertMany(QuestionData);
        await Question.save();
})
