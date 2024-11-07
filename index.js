function timeInterval(){
let losDate = moment().tz("America/Los Angeles").format("MMMM D YYYY");
let losDateElement = document.querySelector("#losDate");
losDateElement.innerHTML = losDate;

let losTime = moment().tz("America/Los Angeles").format("H:m:ss");
let timeElement = document.querySelector("#losTime");
timeElement.innerHTML = `${losTime}<small>AM</small>`;


let joDate = moment().tz("Africa/Johannesburg").format("MMMM D YYYY");
let joDateElement = document.querySelector("#joDate");
joDateElement.innerHTML = losDate;

let joTime = moment().tz("Africa/Johannesburg").format("H:m:ss ");
let joTimeElement = document.querySelector("#joTime");
joTimeElement.innerHTML=`${losTime}<small>AM</small>`;


let canada=moment().tz("Canada/Central").format("MMMM D YYYY");
let canDate=document.querySelector("#caDate");
canDate.innerHTML=canada;

let canadaTime=moment().tz("Canada/Central").format("h:m:ss");
let canTime=document.querySelector("#caTime");
canTime.innerHTML=`${canadaTime}<small>AM</small>`;
}
setInterval(timeInterval,1);