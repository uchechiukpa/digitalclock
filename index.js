function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  let session = "AM";

  if (hour == 0) {
    hour = 12;
    session = "AM";
  }
  if (hour >= 12) {
    session = "PM";
    if (hour > 12) hour = hour - 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let time = hour + ":" + minute + ":" + seconds + " " + session;
  document.getElementById("digitalclock").innerText = time;
}
getTime();
setInterval(getTime, 1000);
