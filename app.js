const id = document.querySelector('register')
const id2 = document.querySelector('login')
const resultDisplay = document.getElementById('result')
let submit
let result
getResult()

function submit() {
    if (submit) {
        result = "Your account has been registered successfully!"
    }
    if (login) {
        result = "You have been logged in successfully!"
    }
    resultDisplay.innerHTML = result
}