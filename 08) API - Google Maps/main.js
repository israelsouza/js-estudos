/*  - Como adicionar um google maps no site   */

let map;

function initMap() {
    // Qual parte vai aparecer no mapa:
    const senai = {lat: - 23.457024969256832, lng: - 46.52730455521595}

    // Colocando essa parte no mapa
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: senai,
    });


    // posição do marcador
    const marker = new google.maps.Marker({
    position: senai,
    map: map,
    });
}

initMap();