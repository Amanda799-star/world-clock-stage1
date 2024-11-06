
let losDate = moment().tz("America/Los Angeles").format("MMMM D YYYY");
let losDateElement = document.querySelector("#losDate");
losDateElement.innerHTML = losDate;

let losTime = moment().tz("America/Los Angeles").format("H:m:s");
let timeElement = document.querySelector("#losTime");
timeElement.innerHTML = losTime;

let paDate = moment().tz("America/Los Angeles").format("MMMM D YYYY");
let losDateElement = document.querySelector("#losDate");
losDateElement.innerHTML = losDate;

let paTime = moment().tz("Europe/Paris").format("H:m:s");
let timeElement = document.querySelector("#losTime");
timeElement.innerHTML=losTime