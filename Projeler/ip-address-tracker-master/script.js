//! Location map script tags
var map = L.map('map').setView([0,0], 13);

//! API Geo 
let ip = '';
const api_key = 'at_R5WrMZJHUPAl39qirade165LzLK4b';
const api_url = "https://geo.ipify.org/api/v2/country,city?"

let url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip

//!Input search Ip Adress 
const inputValue = document.querySelector("#ip_input")
//? form
const form = document.querySelector('form')

form.addEventListener("submit", async (e) => {
    e.preventDefault()  
    ip = inputValue.value;


    url = await api_url + 'apiKey=' + api_key + '&ipAddress=' + ip
    console.log(url);
    getData()
})


//! Location map script tags
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var locationIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize:     [35, 45], // size of the icon
    iconAnchor:   [26.47, 64], // point of the icon which will correspond to marker's location
});

var marker = L.marker(([0, 0]), {icon: locationIcon}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .openOn(map);
}

map.on('click', onMapClick);

async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    const lat = data.location.lat;
    const lon = data.location.lng;

    marker.setLatLng([lat, lon]);
    map.setView([lat, lon], 4);

    console.log(data.location.postalCode);

    document.querySelector('#ip_address_text').textContent = data.ip
    document.querySelector('#location_text').textContent = data.location.region + ', ' + data.location.country + ',' + data.location.postalCode;
    document.querySelector('#time_text').textContent = "UTC" + data.location.timezone
    document.querySelector("#isp_text").textContent = data.isp

}
getData()