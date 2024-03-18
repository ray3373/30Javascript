window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //to stop the function from running if it's not audio
    audio.currentTime = 0; //to restart 
    key.classList.add("playing");
    audio.play();
})

const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);
keys.forEach((key) => {
    key.addEventListener("transitionend", () => {
        key.classList.remove("playing");
    })
})



