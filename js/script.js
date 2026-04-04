const weddingDate = new Date("June 20, 2026 11:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();
const diff = weddingDate - now;

const days = Math.floor((diff / (1000*60*60*24)));
const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
const seconds = Math.floor((diff % (1000*60))/1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);


/* fade animation */

const elements = document.querySelectorAll(".fade");

function reveal(){

elements.forEach((el,i)=>{

setTimeout(()=>{
el.classList.add("show");
}, i*300)

})

}

window.onload = reveal;
