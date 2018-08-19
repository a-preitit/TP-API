console.log("Listo!");

var map;
var latitude;
var longitude;
var apikey = "&APPID=7659317ef39c1434b9621458678e63c3";

$('#btn').click(function(){
      $('#buscador').show();
      initAutocomplete();
      $('#tiempo').css("display", "none");
      $('#btn').css("display", "none");
})

window.onload = getMyLocation;
function getMyLocation(){
  	if(navigator.geolocation){
  		navigator.geolocation.getCurrentPosition(displayLocation);
  	} else {

  	}
}

function displayLocation(position){
  	latitude = position.coords.latitude;
  	longitude = position.coords.longitude;
  	var latLng = new google.maps.LatLng(latitude, longitude);
  	showMap(latLng);
    createMarker(latLng);
}

function showMap(latLng){
  	var mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	  console.log("Tu latitud es " + latitude + " y tu longitud es " + longitude);
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' +latitude+ '&lon=' +longitude+ '&units=metric&lang=es' + apikey,
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          console.log(data);
          var icono = data.weather[0].icon;
          $('#tiempo').show();
          $('#lugar').text(data.name);
          $('#icono').attr('src', "http://openweathermap.org/img/w/" + icono + ".png");
          $('#condi').text(data.weather[0].description);
          $('#condi').css("text-transform", "uppercase");
          $('#min').text("Temp. Minima: " + data.main.temp_min + String.fromCharCode(176)+"C");
          $('#max').text("Temp. Maxima: " + data.main.temp_max + String.fromCharCode(176)+"C");
        }
    });
    $('#btn').show();
    $('#btn').click(function(){
      $('#buscador').show();
      initAutocomplete();
      $('#tiempo').css("display", "none");
      $('#btn').css("display", "none");
    })
}

function createMarker(latLng) {
  var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true
  }
  var marker = new google.maps.Marker(markerOptions);

  var content = 'You are here: ' + latLng.lat() + ', ' + latLng.lng();
  addInfoWindow(marker, latLng, content);

}

function addInfoWindow(marker, latLng, content) {
  var infoWindowOptions = {
    content: content,
    position: latLng
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map);
  });
}