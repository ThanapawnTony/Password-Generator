const lengthSlider = document.querySelector(".password-length input");
const copyIcon = document.querySelector(".input-box span");
generateBtn = document.querySelector(".generate-btn");
options = document.querySelectorAll(".option input");
passwordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!@#$%&*"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => { //loop through each check box
        if (option.checked) { // if checkbox is checked
            // if checkbox id isnt exc && spaces
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
            // then add key value from characters obj to staticpassword
            staticPassword += characters[option.id];
            } else if(option.id === "spaces") { // if checkbox is spaces
                staticPassword += ` ${staticPassword} `; // add spaces between beg & end
            } else { // else pass true value to exc duplicate
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            // if randompassword does not contain the random char or randomchar is equal to spaces " " then add random char to randompassword else decremet i by -1 or i--
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else { // else add random character to random password
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword; //pass randompassword to passwordinput
}

const updatePassIndicator = () => {
    // if length of pass less then 8 display weak and else display medium or strong
    passIndicator.id = lengthSlider.value <= 5 ? "useless" : lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : lengthSlider.value <= 20 ? "good" : "strong";
}

const updateSlider = () => {
    // pass slider value to span text
    document.querySelector(".password-length span").innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
    setTimeout(() => {
        copyIcon.innerText = "copy_all";
    }, 1000);
}

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);