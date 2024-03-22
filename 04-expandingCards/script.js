const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
    let panelActive = false;
    let panelIndex = 0;
    panel.addEventListener("click", () => {
        removeActiveClasses();
        if(panelActive == true && panelIndex == index) {
            panel.classList.remove("active");
            panelActive = false;
        } else {
            panel.classList.add("active");
            panelActive = true;
            panelIndex = index;
        }
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}