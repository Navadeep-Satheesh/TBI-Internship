const Device = require("../Models/device");

const deviceRegister = async (req, res) => {
  console.log(req.body);
  try {
    const { username, deviceNumber, level } = req.body;
    if (!(username && deviceNumber && level)) {
      console.log("ok");
      res.status(400).json({ message: "Incomplete data" });
    }
    const existingUser = await Device.findOne({ username, deviceNumber });
    if (existingUser) {
      res.status(400).json({ message: "Device already registered" });
    }
    const device = await Device.create({
      username: username,
      deviceNumber: deviceNumber,
      level: level,
    });
    res.status(200).json({ message: "Device registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
module.exports = {
  deviceRegister,
};
