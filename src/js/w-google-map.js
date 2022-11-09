
  let CENTER = { lat: 52.375662619320046, lng: 4.896047026672821 };
  let ADRESS = { lat: 52.36723292927121, lng: 4.880492552869326 };
    
    const MARKER_IMG = {
        url: "./img/map-flag.png",
        size: new google.maps.Size(106, 106),
    };

    let MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        zoom: 12,
    });

    let marker = new google.maps.Marker({
        position: ADRESS,
        map: MAP,
        icon: MARKER_IMG,
        title: ADRESS,
        animation: google.maps.Animation.DROP
    });    

    const INFO = new google.maps.InfoWindow({
        content: '<h3 class="map-wondow-text">Diplex Group</h3>'
    })

    marker.addListener('click', function () {
        INFO.open(MAP, marker);
    })






