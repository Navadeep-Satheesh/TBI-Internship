const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/userControllers");
router.post("/userRegister",userRegister);

module.exports = router;