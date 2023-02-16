const mongoose = require("mongoose");

const userSchema = mongoose.Schema({});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;