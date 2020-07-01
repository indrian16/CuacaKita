// Default Location Samarinda
function updateMap(lat = -0.5, lng = 117.15) {

    // location to map
    const cityLatLng = {lat: lat, lng: lng};

    // Get Element Map
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: cityLatLng});
    
    // Give Maker to City
    var marker = new google.maps.Marker({position: cityLatLng, map: map});
}