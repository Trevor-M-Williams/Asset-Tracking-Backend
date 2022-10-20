let data = [
  {
    name: "Burj Khalifa",
    assetType: "building",
    lat: 25.207599631673258,
    lng: 55.27749988595698,
  },
  {
    name: "Golden Gate Bridge",
    assetType: "building",
    lat: 37.821217060561345,
    lng: -122.4788148233123,
  },
  {
    name: "Eiffel Tower",
    assetType: "building",
    lat: 48.86155053288915,
    lng: 2.294483766210438,
  },
  {
    name: "Aventel HQ",
    assetType: "building",
    lat: 39.71997313665227,
    lng: -104.95882263389102,
  },
  {
    name: "Christ the Redeemer",
    assetType: "building",
    lat: -22.945345928311713,
    lng: -43.208933659708336,
  },
  {
    name: "Statue of Liberty",
    assetType: "building",
    lat: 40.75135575701081,
    lng: -73.98143997389718,
  },
  {
    name: "Space Needle",
    assetType: "building",
    lat: 47.6223778805707,
    lng: -122.3504859495356,
  },
  {
    name: "Parthenon",
    assetType: "building",
    lat: 37.97327386667489,
    lng: 23.72308450775538,
  },
  {
    name: "Colosseum",
    assetType: "building",
    lat: 41.891544385689855,
    lng: 12.491866363666642,
  },
];

console.log(data.length);

data.forEach((loc) => {
  postLocation(loc);
});
