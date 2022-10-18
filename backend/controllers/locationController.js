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
    lat: req.body.lat,
    long: req.body.long,
  });

  res.status(200).json(location);
});

module.exports = {
  getLocations,
  setLocation,
};
