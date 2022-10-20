function addMarker() {}

async function getLocations() {
  try {
    const response = await fetch(url + "/api/locations");
    return response.json();
  } catch (err) {
    console.error(err);
  }
}

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: position,
    minZoom: 2,
    restriction: {
      latLngBounds: {
        north: 85,
        south: -80,
        east: 180,
        west: -180,
      },
    },
  });

  let locations = await getLocations();
  locations.forEach((location) => {
    let latLng = {
      lat: location.lat,
      lng: location.lng,
    };

    let iconImage = `./assets/images/${location.assetType}.svg`;

    let marker = new google.maps.Marker({
      position: latLng,
      map,
      icon: iconImage,
    });

    let infoWindow = new google.maps.InfoWindow({
      content: `<h1 style="font-size: 18px">${location.name}</h1>`,
    });

    marker.addListener("click", () => {
      infoWindows.forEach((window) => {
        window.close();
      });
      infoWindow.open(map, marker);
    });

    infoWindows.push(infoWindow);
  });
}

async function postLocation(loc) {
  const response = await fetch(url + "/api/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loc),
  });
  return response.json();
}

function updateMap() {
  position = { lat: 45, lng: 24 };
  map.panTo(position);
}

let url = "https://asset-tracking-backend-production.up.railway.app";
if (window.location.hostname === "127.0.0.1") {
  url = "http://127.0.0.1:5000";
}

let map;
let infoWindows = [];
let position = { lat: 20, lng: 0 };
