function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: "roadmap",
    center: {
      lat: 24.4539851,
      lng: 54.4019773,
    },
    zoom: 17,
  };

  // Display a map on the web page
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map.setTilt(17);

  // Multiple markers location, latitude, and longitude
  var markers = [
    ["AlSalam St Abu Dhabi United Arab Emirates", 24.4539851, 54.4019773],
  ];

  // Info window content
  var infoWindowContent = [
    [
      '<div class="info_content">' +
        '<div class="content">' +
        "</div>" +
        "</div>",
    ],
  ];
}
