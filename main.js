console.log("linked!");

$(document).ready(function(){

	var updateTime = function(){

		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
    // if the hours/minutes/seconds are less than 10, put a 0 in front of them
		if (hours < 10) {
			hours = "0" + hours;
		};
		if (minutes < 10) {
			minutes = "0" + minutes;
		};
		if (seconds < 10) {
			seconds = "0" + seconds;
		};
		var clock = document.getElementById('clock');
		// minutes = whatTime(minutes);
		// seconds = whatTime(seconds);
		clock.innerText = hours + ":" + minutes + ":" + seconds;
		setInterval(updateTime, 500);

	};

	updateTime();

  
});
