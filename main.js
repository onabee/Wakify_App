console.log("linked!");

$(document).ready(function(){

	var logo = $('#logo');
	var $clock = $('#clock');
	var $alarmForm = $('#set-alarm');
	var $currentAlarm = $('#current-alarm');

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
		clock.innerText = hours + ":" + minutes + ":" + seconds + amPm;
		setInterval(updateTime, 500);

	};

	// this creates the format in the dropdown
	$(function(){
		$('#time').combodate({
			value: new Date(),
			firstItem: 'name',
			minuteStep: 1
		});
	});

	// want to take the values chosen in the input and show it in the DOM under "Your alarm:"
	
	// get date from alarm form
	var getAlarmInput = function(){
		var alarmTime = [];
		var $timeInput = $('time');
		var alarmInput = $alarmForm.serialize();
		$currentAlarm.load(alarmInput);

		alarmTime.push($timeInput.value)

		$alarmForm.submit(function(){
			$currentAlarm.load(alarmTime);
		});
		
	};

	// show date in current-alarm div
	var showAlarm = function(){

		$alarmForm.submit(function(){
			$.ajax({
				url: $alarmForm.attr('action'),
				type: 'GET',
				data: $alarmForm.serialize(),
				success: function(response){
					console.log('alarm set');
					alert('You set your time as' + response);
				}, 
				error: function(){
					console.log('alarm not set');
				}
			});
			event.preventDefault();
		});
	};

	updateTime();

  
});
