function currentLocation() { 
  	$.getJSON('http://api.open-notify.org/iss-now.json', function(data) {     		
  		var long_lat = "longitude: " + data.iss_position.longitude + ", latitude: " + data.iss_position.latitude;    		
  		$('#long_lat').html(long_lat);
    });
}