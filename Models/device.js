const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    deviceNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
