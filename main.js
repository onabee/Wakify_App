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


	// ALARM
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
		$alarm.append($('<button id="clear">clear</button>'));

		// when 'clear' button clicked, clear out alarm
		$("button").on("click", function() {
			$alarm.empty();
		});

		// When current time is same time as alarm, alert user and have alarm tone
		var now = new Date();
		var currentHour = now.getHours();
		var currentMinutes = now.getMinutes();

		// setting am/pm. default will be am, changes to pm after noon
		var amPm = "am";

		// if hours are past 12 (noon), subtract 12 and change amPm variable to PM
		if (currentHour > 12) {
			currentHour = currentHour - 12;
			amPm = "pm";
		};

		// show 12 instead of 0 (midnight)
		if (currentHour === 0) {
			currentHour = 12;
		};

    	// if the hour/minutes are less than 10, put a 0 in front of them
		if (currentHour < 10) {
			currentHour = "0" + currentHour;
		};

		if (currentMinutes < 10) {
			currentMinutes = "0" + currentMinutes;
		};

		if (currentMinutes === alarmMinutes) {
			alert("Wake up!");
			console.log('wake up!');
		};

	});


	// when alarm goes off, have option to stop alarm and snooze


	updateTime();


});
