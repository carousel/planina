    var map;
    var markers = [];
    var text;
    var data = [];
    data['Vlasic'] =  {
                    lat:44.293056,
                    lng:17.635833,
                    title: 'Vlasic',
                    content: 'Vlasić 1933 m <a href="/vlasic">Vise</a>'
                  };
    data['Maglic'] =  {
                    lat:43.281111,
                    lng:18.736944,
                    title: 'Maglic',
                    content: 'Maglić 2386 m <a href="/maglic">Vise</a>'
                  };
    data['Prenj'] =  {
                    lat:43.549,
                    lng:17.904,
                    title: 'Prenj',
                    content: 'Prenj 2115 m <a href="/prenj">Vise</a>'
                  };


        function initialize() {
            var mapOptions = {
                zoom: 7,
            }
            map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
$('.show-google-map').on('click',function (e) {

    $("#googleMapsModal").modal();
    if($('input.tt-input').val() != ''){
        text = $('input.tt-input').val(); 
        $('.modal-title').text(text);
        $('p.modal-text').text(($('input.tt-input').val()) + ' map');
        $('input.tt-input').val('');
    }else{
        text = $('select.select-destination').val();
        $('.modal-title').text(text);
    }
    $("#googleMapsModal").on("shown.bs.modal",function(e){
        google.maps.event.trigger(map, 'resize');
        var Marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[text].lat,data[text].lng),
            map: map,
            title: data[text].title
        });
        var infowindow = new google.maps.InfoWindow({
            content: data[text].content
        });
        infowindow.open(map, Marker); 
        map.setCenter(new google.maps.LatLng(44.281111,17.736944));
        //markers.push(Marker);
        //deleteMarkers(markers);
    });
})
function deleteMarkers (markers){
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    };
}



        }

    google.maps.event.addDomListener(window, 'load', initialize);


    $("#googleMapsModal").on("hidden.bs.modal",function(e){
        window.location.reload();
    });

