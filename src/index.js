
function setTimer() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz('America/Los_Angeles');
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY")
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`;

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date")
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz('Europe/London');
londonDateElement.innerHTML = moment().format("MMMM Do YYYY")
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss [<small>]A[</small>]")}`;

let budapestElement = document.querySelector("#budapest");
let budapestDateElement = budapestElement.querySelector(".date")
let budapestTimeElement = budapestElement.querySelector(".time")
let budapestTime = moment().tz('Europe/Budapest');
budapestDateElement.innerHTML = moment().format("MMMM Do YYYY")
budapestTimeElement.innerHTML = `${budapestTime.format("h:mm:ss [<small>]A[</small>]")}`;

let madridElement = document.querySelector("#madrid");
let madridDateElement = madridElement.querySelector(".date")
let madridTimeElement = madridElement.querySelector(".time")
let madridTime = moment().tz('Europe/Madrid');
madridDateElement.innerHTML = moment().format("MMMM Do YYYY")
madridTimeElement.innerHTML = `${madridTime.format("h:mm:ss [<small>]A[</small>]")}`;
}
setTimer();
setInterval(setTimer, 1000)