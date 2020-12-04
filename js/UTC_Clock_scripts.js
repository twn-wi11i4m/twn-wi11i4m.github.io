// the script of the UTC Clock

function UTCTimeClock() {

    var Clock = new Date;

    var Day = Clock.getUTCDay();
    var Month = Clock.getUTCMonth();
    var Year = Clock.getFullYear();
    var hours = Clock.getUTCHours();
    var minutes = Clock.getUTCMinutes();
    var seconds = Clock.getUTCSeconds();

    // Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display the UTC Time Clock
    document.getElementById('UTCClock').innerHTML = 
    Day + " / " + Month + " / " + Year + " | UTC " + hours + " : " + minutes + " : " + seconds;
    var t = setTimeout(UTCTimeClock, 100);
}
 