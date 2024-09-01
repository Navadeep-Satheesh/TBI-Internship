const Device = require("../Models/device");
const express = require("express");
const router = express.Router();

const {
  deviceRegisterNotExisting,
  getAllDevices,
  checkDeviceExists,
  deviceRegisterExisting,
  updateLevel,
  removeDevice,
  addServiceDate,
} = require("../controllers/deviceControllers");

router.post("/devices/check", checkDeviceExists);
router.post("/devices/register", deviceRegisterNotExisting);
router.post("/devices/addUser", deviceRegisterExisting);
router.get("/devices/:username", getAllDevices);
router.post("/devices/updateLevel", updateLevel);
router.delete("/devices/removeDevice", removeDevice);
router.post("/devices/serviceDate", addServiceDate);
module.exports = router;
