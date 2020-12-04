// the script of the UTC Clock

function UTCTimeClock() {

    var LocalClock = new Date();
    var UTCClock = LocalClock.toUTCString;

    var hours = UTCClock.getHours();
    var minutes = UTCClock.getMinutes();
    var seconds = UTCClock.getSeconds();

    // Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display the UTC Time Clock
    document.getElementById('UTC_Clock').innerHTML = hours + " : " + minutes + " : " + seconds;
    var t = setTimeout(UTCTimeClock, 500);
}
 