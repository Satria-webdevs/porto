function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.16503, lng: 106.65772};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}