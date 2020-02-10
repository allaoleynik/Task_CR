function peopleInSpace() { 
  	$.getJSON('http://api.open-notify.org/astros.json', function(data) {     		
  		var count = "Total amount: " + data.number + " people on ISS"; 
  		var h = 0;
  		for(var i = 0; i<parseFloat(data.number); i++){  			
  			$('#people').append('<div class="people-block"><img src="user_icon.png" height="50px" width="50px"> &nbsp;&nbsp;&nbsp;' +data.people[i].name+'</div>');  			
  		}   		
  		setInterval($('#count-people').html(count), 5000);
    });
}