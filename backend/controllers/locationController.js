const asyncHandler = require("express-async-handler");

const Location = require("../models/locationModel");

//  @desc   Get locations
//  @route  GET /api/locations
//  @access Private
const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find();

  res.status(200).json(locations);
});

//  @desc   Set location
//  @route  POST /api/locations
//  @access Private
const setLocation = asyncHandler(async (req, res) => {
  const location = await Location.create({
    name: req.body.name,
    assetType: req.body.assetType,
    lat: req.body.lat,
    lng: req.body.lng,
  });

  res.status(200).json(location);
});

module.exports = {
  getLocations,
  setLocation,
};
