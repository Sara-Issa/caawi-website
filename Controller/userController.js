const User = require("./../Model/userModel");

exports.allUser = (req, res) => {
  res.status(200).json({
    message: "all User",
  });
};

exports.saveUser = (req, res) => {
  res.status(201).json({
    message: "created a User",
  });
};

exports.editUser = (req, res) => {
  res.status(200).json({
    message: "User Edited",
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "User Deleted",
  });
};

exports.findUser = (req, res) => {
  res.status(200).json({
    message: "User Found",
  });
};