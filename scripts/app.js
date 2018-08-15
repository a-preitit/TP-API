console.log("Listo!");

$('#btn').click(function(){
	if($('#lugar').val() === ""){
		alert("No se puso info");
	}
	else{
		alert("Info Agregada: " + $('#lugar').val());
	}
}) 

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.549411, lng: -58.454080},
      zoom: 15
    });
}

window.onload = getMyLocation;
function getMyLocation(){
  	if(navigator.geolocation){
  		navigator.geolocation.getCurrentPosition(displayLocation);
  	} else {
  		initMap();
  	}
}

function displayLocation(position){
  	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latLng = new google.maps.LatLng(latitude, longitude);
  	showMap(latLng);
}

function showMap(latLng){
  	var mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	map = new google.maps.Map(document.getElementById('map'), mapOptions);
}      