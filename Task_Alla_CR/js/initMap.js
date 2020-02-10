function initMap() {
  	$.getJSON('http://api.open-notify.org/iss-now.json', function(data) { 
  			  var latitude = data.iss_position.latitude;
  			  var longitude = data.iss_position.longitude;  			   
      		var myLatLng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};    		
      		var map = new google.maps.Map(document.getElementById('map'), {
        		zoom: 4,
        			center: myLatLng
      		});          		
      		var marker = new google.maps.Marker({
        		position: myLatLng,
        		map: map,
        		title: 'Hello World!'
      		});          	
       });  
}