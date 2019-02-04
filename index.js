//Javascript

//hamburger button
let hamburgerBtn = document.querySelector('.navbar .buttons')

let loginSignUp =  document.querySelectorAll('.logo a')

//add event listener to hamburger button
hamburgerBtn.addEventListener('click', event => {
    loginSignUp.forEach(item => item.classList.toggle('no-show'))
})