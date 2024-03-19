const secondHand = document.querySelector(".secondshand");
const minuteHand = document.querySelector(".minutehand");
const hourHand = document.querySelector(".hourHand");

function newDate() {
    const date = new Date();
    const seconds = date.getSeconds()
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const minuteDeg = ((minutes/60) * 360) + 90;
    const degree = ((seconds/60) * 360) + 90;
    const hourDeg = ((hours / 12) * 360) + 90;



    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${degree}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(() => {
    newDate();
}, 1000);