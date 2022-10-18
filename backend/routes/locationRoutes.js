const express = require("express");
const router = express.Router();
const {
  getLocations,
  setLocation,
} = require("../controllers/locationController");

router.get("/", getLocations);
router.post("/", setLocation);

module.exports = router;
