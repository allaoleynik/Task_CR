$(document).ready(function(){  
    currentLocation(); 
    currentTime(); 
    initMap();  
    peopleInSpace();         
    setInterval(currentLocation, 5000);
    setInterval(currentTime, 5000);   
    setInterval(initMap, 5000);        
});  