const lengthSlider = document.querySelector(".password-length input");
const updateSlider = () => {
    // pass slider value to span text
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSlider();
lengthSlider.addEventListener("input", updateSlider);