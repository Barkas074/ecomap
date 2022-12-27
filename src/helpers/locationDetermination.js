function LocationDetermination(map) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        map.flyTo([lat, lng], map.getZoom())
    })
    // map.locate().on("locationfound", function (e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    // });
}

export default LocationDetermination;