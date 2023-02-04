const lengthSlider = document.querySelector(".password-length input");
copyIcon = document.querySelector(".input-box span")
const updateSlider = () => {
    // pass slider value to span text
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(value);
    copyIcon.innerText = "check";
}

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);