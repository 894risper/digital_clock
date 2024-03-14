const hourEL=document.getElementById("hour");
const minuteEL= document.getElementById("minutes");
const secondsEL= document.getElementById("seconds");
const ampmEL= document.getElementById("ampm");

function updateClock(){

let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();
let ampm = "AM"

if (h>12){
    h= h-12;
    ampm= "PM"
}
hourEL.innerText= h;
minuteEL.innerText=m;
secondsEL.innerHTML=s;
ampmEL.innerHTML=ampm;

setTimeout(()=>{

},1000);
}
updateClock()