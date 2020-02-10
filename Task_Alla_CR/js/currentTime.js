function currentTime() {
  var date = new Date();
  var options = {  
  	year: 'numeric',
  	day: 'numeric',
  	month: 'short',
  	weekday: 'long',  
	 };
	 $('#time').html(date.getUTCHours() + ":" + date.getUTCMinutes());
	 $('#date').html(date.toLocaleString("en-US", options));

} 