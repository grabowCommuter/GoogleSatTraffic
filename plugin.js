{
    "moduleId" : "grabowCommuter/googleSatTraffic",
    "title" : "Satellite + Traffic",
    "subtitle" : "www.google.com",
    
    "backButton" : false,
    "enableGPS" : true,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http",
    "shouldOverrideUrlLoading2" : "https",

    "loadUrl" : null,

    "loadDataWithBaseUrl1" : null,
    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
					
    "browserLaunchLink" : "http://www.google.com",
    
    "loadDataWithBaseUrl2" : "
    <!DOCTYPE html>
<html>
  <head>
    <meta name='viewport' content='initial-scale=1.0, user-scalable=no'>
    <meta charset='utf-8'>
    <title>Traffic layer</title>
    <style>
      html, body, #map-canvas {
        height: 100%;
        margin: 0px;
        padding: 0px
      }
    </style>
    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true'></script>
    <script>
function initialize() {
  var myLatlng = new google.maps.LatLng(#lat#, #lng#);
  var mapOptions = {
    zoom: #zoom#,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

    </script>
  </head>
  <body>
    <div id='map-canvas'></div>
  </body>
</html>
    "
}
