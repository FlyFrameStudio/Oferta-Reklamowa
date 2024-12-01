var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_odm_orthophoto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "odm_orthophoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/odm_orthophoto_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2329911.220639, 6440713.533966, 2330110.890328, 6440933.777096]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_odm_orthophoto_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_odm_orthophoto_1];
