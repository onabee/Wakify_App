console.log("linked!");

$(document).ready(function(){

	var logo = $('#logo');
	var $clock = $('#clock');
	var $alarmForm = $('#set-alarm');
	var $alarm = $('#current-alarm');


	// SHOWING CURRENT TIME

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
		// hourClass = $('<span>').addClass("hour").html(hours);
		// minuteClass = $('<span>').addClass("minute").html(minutes);
		// secondClass = $('<span>').addClass("second").html(seconds);
		// timeOfDayClass = $('<span>').addClass("time-of-day").html(amPm);
		// $clock.append(hourClass + minuteClass + secondClass + timeOfDayClass);
		// hourClass.innerText = hours;
		// minuteClass.innerText = minutes;
		// secondClass.innerText = seconds;
		// timeOfDayClass.innerText = amPm;
		clock.innerHTML = hours + ":" + minutes + ":" + seconds + amPm;
		setInterval(updateTime, 500);
	};

	// CREATING DROPDOWN MENUS

	var $hourSelect = $('#hourSelect');
	var hours = [];
	var $minuteSelect = $('#minuteSelect');
	var minutes = [];
	var mOption = '';
	var hOption = '';

	// create array containing all hours
	for (var i=1; i<13; i++){
		if (i < 10){
			i = "0" + i;
		};
		hours.push(i);
	};

	// loop through hours array, add each number as an option in select
	for (var i=0; i<hours.length; i++){
		hOption += '<option value="' + hours[i] + '">' + hours[i] + '</option>';
	};
	$hourSelect.append(hOption);

	// first create array containing all minutes
	for (var i=0; i<60; i++){
		if (i < 10){
			i = "0" + i;
		};
		minutes.push(i);
	};

	// loop through minutes array and add each number as an option in select
	for (var i=0; i<minutes.length; i++){
		mOption += '<option value="' + minutes[i] + '">' + minutes[i] + '</option>';
	};
	$minuteSelect.append(mOption);


	// SETTING ALARM
	$alarmForm.submit(function(event){
		event.preventDefault();
		// grab values from dropdowns
		var alarmHours = $('#hourSelect option:selected').text();
		var alarmMinutes = $('#minuteSelect option:selected').text();
		var alarmTime = $('#ampmselect option:selected').text(); 
		// format values 
		var alarmSet = alarmHours + ":" + alarmMinutes + alarmTime;
		$alarm.append(alarmSet);
		// reset select boxes
		$('select option').prop('selected', function(){
			return this.defaultSelected;
		});
	});

	// When current time is same time as alarm, alert user and have alarm tone
	// if ($clock.innerHTML == $alarm.innerHTML) {
	// 	alert("Wake up!");
	// };

	// when alarm goes off, have option to stop alarm and snooze

	// if there is a current alarm, disable selection boxes and notify user one is set


	updateTime();

  
});
