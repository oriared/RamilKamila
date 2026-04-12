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

function loadGoogleForm() {
    const container = document.getElementById("form-container");
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSc3kXCavunGiHjawDmrKwWY7V6gMHi5Z7SLmqkqbYj7lv36Ig/viewform?embedded=true";
    iframe.width = "100%";
    iframe.height = "900";
    iframe.frameBorder = "0";
    iframe.marginHeight = "0";
    iframe.marginWidth = "0";
    iframe.style.border = "0";
    iframe.style.display = "block";

    container.appendChild(iframe);
}

document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    reveal();

    // загружаем форму отдельно, уже после старта страницы
    setTimeout(loadGoogleForm, 100);
});