   // var map;
   //      function initMap() {
   //          var latlng = new google.maps.LatLng(43.9058083561574,17.7923583984375);
   //          var mapOptions = {
   //              zoom: 8,
   //              center: latlng
   //          }
   //          map = new google.maps.Map(document.getElementById('map'), mapOptions);
   //          var MaglicMarker = new google.maps.Marker({
   //              position: new google.maps.LatLng(43.281111,18.736944),
   //              map: map,
   //              title: 'Maglic'
   //          });
   //          var infowindow = new google.maps.InfoWindow({
   //              content: 'Maglić 2386 m <a href="#">Vise</a>'
   //          });
   //           infowindow.open(map, MaglicMarker); 

   //          var PrenjMarker = new google.maps.Marker({
   //              position: new google.maps.LatLng(43.549,17.904),
   //              map: map,
   //              title: 'Maglic'
   //          });
   //          var infowindow = new google.maps.InfoWindow({
   //              content: 'Prenj 2115 m <a href="#">Vise</a>'
   //          });

   //          infowindow.open(map, PrenjMarker);  

   //          var VlasicMarker = new google.maps.Marker({
   //              position: new google.maps.LatLng(44.283333,17.666667),
   //              map: map,
   //              title: 'Maglic'
   //          });
   //          var infowindow = new google.maps.InfoWindow({
   //              content: 'Vlasic 1943 m <a href="#">Vise</a>'
   //          });

   //          infowindow.open(map, VlasicMarker);  
 
   //          var CincarMarker = new google.maps.Marker({
   //              position: new google.maps.LatLng(43.90222,17.062778),
   //              map: map,
   //              title: 'Maglic'
   //          });
   //          var infowindow = new google.maps.InfoWindow({
   //              content: 'Cincar 2006 m <a href="#">Vise</a>'
   //          });

   //          infowindow.open(map, CincarMarker);  
   //          marker.setMap(map);

   //      }

    var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

// var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//   'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
//   'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
//   'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
//   'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//   'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
//   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];

var states = ['Maglic','Volujak','Cvrsnica','Prenj','Cvrsnica','Otomalj','Cincar','Vitorog',
              'Troglav','Sator','Durmitor','Bjelasnica','Jahorina','Vlasic','Visocica','Treskavice',
              'Zelengora','Klekovaca','Igman','Sator','Vran'];

$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});

// $(document.body).on('click','.tt-suggestion',function  () {
//     alert($(this).text());
// })
// $('select.select-destination').on('click',function  () {
//     alert($(this).val());
// })
$('.select-button').on('click',function (e) {
    e.preventDefault();
    $('#google-map-modal').modal();
    if($('input.tt-input').val() != ''){
        $('p.modal-text').text(($('input.tt-input').val()) + ' map');
        $('input.tt-input').val('');
    }else{
        $('p.modal-text').text(($('select.select-destination').val()) + ' map');
    }
})