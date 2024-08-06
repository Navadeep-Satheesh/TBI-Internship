const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    name: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      requried: true,
      unique: true,
    },
    status: {
      type: String,
      unique: true,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    serialNumber: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
