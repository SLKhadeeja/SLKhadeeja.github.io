var myMap = L.map('mapId').setView([9.6183,6.5470], 13);

L.tileLayer('./images/map (2).png').addTo(myMap);
L.geoJSON(nig).addTo(myMap);