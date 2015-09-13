
chrome.alarms.create("one-hour-tick", {
    "periodInMinutes": 1
})

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (Date.now() % 60 == 0) {
	var audio = new Audio("./tick.mp3");
	audio.play();
    }
});
