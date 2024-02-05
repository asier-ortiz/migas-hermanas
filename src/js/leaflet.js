'use strict';

import {MAPBOX_TOKEN} from './config.js';

const center = [41.940065, -7.436819];

const setupLeafletMap = function () {
    const map = L.map("map", {zoomControl: false, attributionControl: false}).setView(center, 15);
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
            minZoom: 9,
            maxZoom: 25,
            id: "mapbox/streets-v11",
            accessToken: `${MAPBOX_TOKEN}`
        }).addTo(map);
    L.marker(center).addTo(map).bindPopup("Migas hermanas");
    L.control.zoom({position: 'topright'}).addTo(map)
}

const init = function () {
    setupLeafletMap();
}

init();