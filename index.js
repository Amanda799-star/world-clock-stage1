function timeInterval(){
let losDate = moment().tz("America/Los Angeles").format("MMMM D YYYY");
let losDateElement = document.querySelector("#losDate");
losDateElement.innerHTML = losDate;

let losTime = moment().tz("America/Los Angeles").format("h:m:ss [<small>]A[</small>]");
let timeElement = document.querySelector("#losTime");
timeElement.innerHTML = `${losTime}`;


let joDate = moment().tz("Africa/Johannesburg").format("MMMM D YYYY ");
let joDateElement = document.querySelector("#joDate");
joDateElement.innerHTML = losDate;

let joTime = moment().tz("Africa/Johannesburg").format("h:m:ss [<small>]A[</small>]");
let joTimeElement = document.querySelector("#joTime");
joTimeElement.innerHTML=`${losTime}`;


let canada=moment().tz("Canada/Central").format("MMMM D YYYY ");
let canDate=document.querySelector("#caDate");
canDate.innerHTML=canada;

let canadaTime=moment().tz("Canada/Central").format("h:m:ss [<small>]A[</small>]");
let canTime=document.querySelector("#caTime");
canTime.innerHTML=`${canadaTime}`;
}
setInterval(timeInterval,1);

function updateCity(event){
    let timeZone= event.target.value;
    if(timeZone==="current"){
        timeZone=moment.tz.guess()
    }
    let cityName= timeZone.replace("-"," ").split("/")[1];
    let cityDate=moment().tz(timeZone).format("MMMM D YYYY");
    let cityTime=moment().tz(timeZone).format("h:m:ss A");
    let showDate=document.querySelector("#flex")
    showDate.innerHTML =
    `
    <div id="flex"  style="border:none" >
                <div style=padding-right:10px">
                <div class="city"><h2> ${cityName}</h2></div>
                <div class="date" id="losDate">${cityDate}</div>
                </div>
            <div class="time" id="losTime" style="padding-left:90px">${cityTime}<small>AM</small></div>
            </div>
    `
}

let displayTime=document.querySelector("#clock");
displayTime.addEventListener("change",updateCity);