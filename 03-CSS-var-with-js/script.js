const inputs = document.querySelectorAll(".controls input");

function handleChanges() {
    const suffix = this.dataset.sizing || "";
0
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => {
    input.addEventListener("change", handleChanges);
});

inputs.forEach((input) => {
    input.addEventListener("mousemove", handleChanges);
})