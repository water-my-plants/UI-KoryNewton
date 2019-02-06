//Javascript

//hamburger button
let hamburgerBtn = document.querySelector('.navbar .buttons img')

let loginSignUp =  document.querySelectorAll('.no-show')

//add event listener to hamburger button
hamburgerBtn.addEventListener('click', event => {
    loginSignUp.forEach(item => item.classList.toggle('no-show'))
})


//Event listener for "Learn More" button:
let learnMoreBtn = document.querySelector('.learnMore-btn')

learnMoreBtn.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = '#5AAB61';
    event.target.style.color = 'white'
})

learnMoreBtn.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black'
})

