function update(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "";

    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    document.getElementById("MyClockDisplay").innerText = update(hour) + " : " + update(minute) + " : " + update(second) + " " + period;

    setTimeout(showTime, 1000);
}

showTime();