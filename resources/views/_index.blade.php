<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="{{asset('/css/bootstrap.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('/css/app.css')}}">

</head>
<body>
   <div id="map"></div>

</body>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASGG1cFKdvjnKt_CFK-mr0SUi5YzmVOlI&callback=initMap"></script>
    <script src="{{asset('/js/app.js')}}"></script>
</html>