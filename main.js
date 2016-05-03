console.log("linked!");

$(document).ready(function(){

	var updateTime = function(){

		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		// setting am/pm. default will be am, changes to pm after noon
		var amPm = "am";

		// if hours are past 12 (noon), subtract 12 and change amPm variable to PM
		if (hours > 12) {
			hours = hours - 12;
			amPm = "pm";
		};

		// show 12 instead of 0 (midnight)
		if (hours === 0) {
			hours = 12;
		};

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
		clock.innerText = hours + ":" + minutes + ":" + seconds + amPm;
		setInterval(updateTime, 500);

	};

	$(function(){
		$('#time').combodate({
			firstItem: 'name',
			minuteStep: 1
		});
	});

	var setAlarm = function(){

	};

	var resetAlarm = function(){

	};

	updateTime();

	$('#reset').on('click', resetAlarm);

  
});
