let slider = document.getElementById("myRange");
let numbersCheckbox = document.getElementById('numbers');
let lowercaseCheckbox = document.getElementById('lowercase');
let uppercaseCheckbox = document.getElementById('uppercase');
const button = document.getElementById('b');

// Function for all the checkbox logic
function generate() {
    let passwordLength;
    passwordLength = slider.value;
    let password = "";
    // numbers for everything checked
    if (numbersCheckbox.checked && uppercaseCheckbox.checked && lowercaseCheckbox.checked) {
        let allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters.substring(randomNumber, randomNumber + 1);
        }
    }
    // logic for numbers and uppercase letters checked
    else if (numbersCheckbox.checked && uppercaseCheckbox.checked) {
        let numbersAndUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * numbersAndUppercase.length);
            password += numbersAndUppercase.substring(randomNumber, randomNumber + 1);
        }
    }
    // Logic for numbers and lowercase letters checked
    else if (numbersCheckbox.checked && lowercaseCheckbox.checked) {
        let numbersAndLowercase = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * numbersAndLowercase.length);
            password += numbersAndLowercase.substring(randomNumber, randomNumber + 1);
        }
    } // Logic for uppercase and lowercase checked
    else if (uppercaseCheckbox.checked && lowercaseCheckbox.checked) {
        let uppercaseAndLowercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * uppercaseAndLowercase.length);
            password += uppercaseAndLowercase.substring(randomNumber, randomNumber + 1);
        }
    }
    // Logic for only numbers checked
    else if (numbersCheckbox.checked) {
        let numbers = '0123456789';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * numbers.length);
            password += numbers.substring(randomNumber, randomNumber + 1);
        }
    }
    // Logic for only uppercase checked
    else if (uppercaseCheckbox.checked) {
        let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * uppercaseCharacters.length);
            password += uppercaseCharacters.substring(randomNumber, randomNumber + 1);
        }
    }
    // Logic for only lowercase checked
    else if (lowercaseCheckbox.checked) {
        let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * lowercaseCharacters.length);
            password += lowercaseCharacters.substring(randomNumber, randomNumber + 1);
        }
    }
    document.getElementById("result").innerText = password;
}

// Event listener button
button.addEventListener('click', function () {
    generate()
    password = ''
})