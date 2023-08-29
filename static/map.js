let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 43.7915, lng: -79.5400 },
		zoom: 15,
	});

//   new google.maps.Marker({
//     position: { lat: 43.7915, lng: -79.5400 },
//     map,
//     label: "🏠",
//     title: "Hello World!",
//     draggable: false,
//     animation: google.maps.Animation.DROP,
//     // icon: "static/pngwing.com.png"
//   });

  const drawingManager = new google.maps.drawing.DrawingManager({
	drawingMode: null,
	drawingControl: true,
	drawingControlOptions: {
	position: google.maps.ControlPosition.TOP_CENTER,
	drawingModes: [
		google.maps.drawing.OverlayType.POLYGON
	],
}
});

  drawingManager.setMap(map);
}


  window.initMap = initMap;

  

  
