console.log("Listo!");

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('#map'), {
  		center: {lat: -34.549411, lng: -58.454080},
  		zoom: 15
	});
}

/*window.onload = getMyLocation;
function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		initMap();
	}
}*/

	      