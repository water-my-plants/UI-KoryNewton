//Javascript

//hamburger button
let hamburgerBtn = document.querySelector('.navbar .buttons img')

let loginSignUp =  document.querySelectorAll('.no-show')

let dropDown = document.querySelector('.dropdown')

//add event listener to hamburger button
hamburgerBtn.addEventListener('click', event => {
    loginSignUp.forEach(item => item.classList.toggle('no-show'))
    dropDown.classList.toggle('animation')
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


// all navbar buttons 

class Button {
    constructor(btnElement) {
        this.btnElement = btnElement;
        this.btnElement.addEventListener('mouseover', () => this.moused(this.btnElement))
        this.btnElement.addEventListener('mouseout', () => this.mousedOut(this.btnElement))


    }

    moused() {
        let allBtns = document.querySelectorAll('.container .actionLink')
         allBtns.forEach(item => item.style.backgroundColor = '#30694B')
         this.btnElement.style.backgroundColor = '#45785D';
         this.btnElement.style.color = 'white'
    }

    mousedOut() {
        let allBtns = document.querySelectorAll('.container .actionLink')
        allBtns.forEach(item => item.style.backgroundColor = '#30694B' )

    }
}


let navbarBtns = document.querySelectorAll('.container .actionLink');
navbarBtns.forEach(item => new Button(item))

// this.cards = document.querySelectorAll(`.card[data-tab= '${this.tabData}']`)
