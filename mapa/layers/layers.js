var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_przycite_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "przycięte",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/przycite_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2329919.805220, 6440729.026797, 2330091.395484, 6440883.413055]
                            })
                        });
var format_granicav2_2 = new ol.format.GeoJSON();
var features_granicav2_2 = format_granicav2_2.readFeatures(json_granicav2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicav2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicav2_2.addFeatures(features_granicav2_2);
var lyr_granicav2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granicav2_2, 
                style: style_granicav2_2,
                popuplayertitle: "granicav2",
                interactive: true,
                title: '<img src="styles/legend/granicav2_2.png" /> granicav2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_przycite_1.setVisible(true);lyr_granicav2_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_przycite_1,lyr_granicav2_2];
lyr_granicav2_2.set('fieldAliases', {'id': 'id', });
lyr_granicav2_2.set('fieldImages', {'id': '', });
lyr_granicav2_2.set('fieldLabels', {'id': 'no label', });
lyr_granicav2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});