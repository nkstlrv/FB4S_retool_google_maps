let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 43.7913, lng: -79.5396 },
    mapTypeId: "terrain",
  });

  new google.maps.Marker({
    position: { lat: 43.7915, lng: -79.5400 },
    map,
    label: "🏠",
    title: "Hello World!",
    draggable: false,
    animation: google.maps.Animation.DROP,
    // icon: "static/pngwing.com.png"
  });

  let drawingManager = new google.maps.drawing.drawingManager({
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [google.maps.drawing.OverlayType.POLYGON],
    },
    polygonOptions: {
      clickable: true,
      draggable: false,
      editable: true,
      fillColor: "#ADFF2F",
      fillOpacity: 0.5,
    }
  });

  drawingManager.setMap(map);
}


  window.initMap = initMap;

  

  
