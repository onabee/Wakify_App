console.log("linked!");

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

$(document).ready(function(){

	var updateTime = function(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		minutes = (minutes < 10 ? "0" : "") + minutes;

		// turns into 12 hour format instead of 24 hours, specifies am or pm
		var amPm = (hours < 12) ? "am" : "pm";
		hours = (hours > 12) > hours - 12 : hours;
		hours = (hours == 0) ? 12 : hours;

		// format how time will look
		var currentTimeDisplay = hours + ":" + minutes + " " + amPm;

		document.getElementById("clock").firstChild.nodeValue = currentTimeDisplay
	}


});