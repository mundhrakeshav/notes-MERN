const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, password, pic } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User Exists");

    }
    const user = await User.create({ name, email, password, pic });
    
    if (user) {
        res.status(201).json({name: user.name, email: user.email, isAdmin: user.isAdmin, pic: user.pic, token: generateToken(user._id)});
    } else {
        res.status(400).send("Error");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (user && (await user.matchPassword(password))) {
        res.json({name: user.name, email: user.email, isAdmin: user.isAdmin, pic: user.pic, token: generateToken(user._id)});
    } else {
        throw new Error("Invalid email or passwors");
    }
});

module.exports = { registerUser, authUser };