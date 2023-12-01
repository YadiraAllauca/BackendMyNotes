const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.addUser);
router.post("/signin", userController.signIn);
router.post("/id", userController.findUser);
router.get("/", userController.loadUsers);
router.post("/:id", userController.updateUser);
router.post("/find", userController.findUserByID);
router.post("/token", userController.getUserByToken);
module.exports = router;

