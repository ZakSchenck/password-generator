let slider = document.getElementById("myRange");
let numbersCheckbox = document.getElementById('numbers');
let lowercaseCheckbox = document.getElementById('lowercase');
let uppercaseCheckbox = document.getElementById('uppercase');
const button = document.getElementById('b');

// making it so you can only type numbers in the input field
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

// Function for all the checkbox logic
function generate() {
    let passwordLength;
    passwordLength = slider.value;
    let password = "";
    let allowedCharacters = '';
    // Logic for number checked
    if (numbersCheckbox.checked) {
        allowedCharacters += '0123456789';
    }
    // Logic for uppercase checked
    if (uppercaseCheckbox.checked) {
        allowedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    // Logic for lowercase checked
    if (lowercaseCheckbox.checked) {
        allowedCharacters += 'abcdefghijklmnopqrstuvwxyz';
    }
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("result").innerText = password;
}

// Event listener button
button.addEventListener('click', function () {
    // numbers 3-20 validation check
    let lengthAlert = document.getElementById('pw-length');
    if (slider.value < 3 || slider.value > 20) {
        lengthAlert.style.display = "block";
    }
    else {
        generate();
        lengthAlert.style.display = "none";
    }
    password = ''
})