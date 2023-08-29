let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 43.7913, lng: -79.5396 },
      mapTypeId: "terrain",
    });


    // initial polygons coordinated
    const initCoords = [
      {"lat": 43.7913, "lng": -79.5396},
            {"lat": 43.7831, "lng": -79.5374},
            {"lat": 43.7879, "lng": -79.5158},
            {"lat": 43.7957, "lng": -79.5178},
            {"lat": 43.7913, "lng": -79.5396},
    ];

    // initial polygon
    const initPolygon = new google.maps.Polygon({
      paths: initCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    initPolygon.setMap(map);
  }

  window.initMap = initMap;