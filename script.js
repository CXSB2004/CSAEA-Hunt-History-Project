
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var x = document.getElementById("location");

function Test(){
window.location.href = 'maps.html'
};

function Test2(){
window.location.href = 'test2.html'
};

function Template(){
window.location.href = 'template.html'
};

function toSiteInfo(){
window.location.href = 'SiteInfo.html'
};

function goBack(){
  window.location.href = 'index.html'
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

// maps.html
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 8
  });
}
