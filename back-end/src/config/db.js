const mongoose = require("mongoose");

const connect = new mongoose.connect("mongodb+srv://adarshakhatua:2HPHZpSHYkfHit0a@cluster0.9f3au.mongodb.net/linkedin");

module.exports = connect;