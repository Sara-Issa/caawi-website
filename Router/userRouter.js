const express = require("express");
const userController = require("./../Controller/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.allUser)
  .post(userController.saveUser);

router
  .route("/:id")
  .put(userController.editUser)
  .delete(userController.deleteUser)
  .get(userController.findUser);

module.exports = router;