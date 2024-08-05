const Device = require("../Models/device");
const express = require("express");
const router = express.Router();

const { deviceRegister } = require("../controllers/deviceControllers");

router.post("/deviceRegister", deviceRegister);

module.exports = router;
