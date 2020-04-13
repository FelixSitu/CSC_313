var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-120.6625, 37.41]),
    zoom: 4
  })
});

function add_map_point(lat, lng, radius, color) {
  var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
          features: [
              new ol.Feature({
                  geometry: new ol.geom.Point(ol.proj.fromLonLat([lat, lng])),
              })
          ]
      }),
      style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius * 5,
            fill: new ol.style.Fill({color: color})
        })
    })
  });
       
  map.addLayer(layer);
  
}

//San Francisco
add_map_point(-122.727803, 37.785221, 1, 'red')

//San Jose
add_map_point(-121.8863, 37.3382, 2, 'blue')

//San Luis Obispo
add_map_point(-120.672788, 35.273149, 2, 'green')