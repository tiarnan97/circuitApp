  

function geojson() {
var mymap = L.map('gis').locate({setView: true, maxZoom: 10});
  mymap.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});
  
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGVhcm5hd24iLCJhIjoiY2syZGRucm1sMDdoNjNucDNkdXYzcjFhZiJ9.OPcVRE4ettMtx0sPN1VBrQ'
    }).addTo(mymap);
//
//     function onLocationFound(e) {
//  var radius = e.accuracy;
//
//  L.marker(e.latlng).addTo(mymap)
//    .bindPopup("You are within " + radius + " meters from this point").openPopup();
//
//  L.circle(e.latlng, radius).addTo(mymap);
// }
//
// mymap.on('locationfound', onLocationFound);
//
//     function onLocationError(e) {
//  alert(e.message);
// }



    // var geojsonLayer = new L.GeoJSON.AJAX("https://opendata.arcgis.com/datasets/96ba8434e72144e5a4678e31e9c3b253_16.geojson");
    // geojsonLayer.addTo(mymap);


var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -6.268730163574219,
            53.35362523805683
          ],
          [
            -6.276283264160155,
            53.35280554782282
          ],
          [
            -6.2779998779296875,
            53.35137105198305
          ],
          [
            -6.278686523437499,
            53.347477177067546
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -6.27593994140625,
          53.33456336261478
        ]
      }
    }
  ]
};

L.geoJSON(geojson).addTo(mymap);
}