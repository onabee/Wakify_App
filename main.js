console.log("linked!");

$(document).ready(function(){

	var updateTime = function(){

		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();

    // if the minutes are less than 10, put a 0 in front of the minutes
		minutes = (minutes < 10 ? "0" : "") + minutes;

		// turns into 12 hour format instead of 24 hours, specifies am or pm
		var amPm = (hours < 12) ? "am" : "pm";

    // hours greater than 12 are greater than the hours minus 12. so 13 > 1 : if it's not greater it's 1-12
    hours = ((hours > 12) > (hours - 12)) : hours;

    // clock is in 24 hour format, so instead of writing 0, it would be 12.
		hours = (hours === 0) ? 12 : hours;

		// format how time will look
		var currentTimeDisplay = hours + ":" + minutes + " " + amPm;

		document.getElementById("clock").firstChild.nodeValue = currentTimeDisplay
	}

  updateTime();

});
