const mongoose = require("mongoose");

const locationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assetType: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Location", locationSchema);
