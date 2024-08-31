const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    username: {
      type: [String],
      unique: false,
    },
    DeviceName: {
      //Device Name
      type: String,
      // required: true,
      default: "Unnamed",
    },
    location: {
      type: String,
      // required: true,
      // unique: true
    },
    level: {
      type: Number,
      // required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive", "Maintainence"],
    },
    capacity: {
      type: Number,
      required: true,
    },
    serialNumber: {
      type: String,
      unique: true,
      required: true,
    },

    serviceDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
