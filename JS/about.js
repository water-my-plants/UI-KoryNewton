//add event listener to mobile hamburger button
let hamburgerBtn = document.querySelector('.navbar .buttons img')
let loginSignUp =  document.querySelectorAll('.no-show')
let dropDown = document.querySelector('.dropdown')


//Toggle dropdown animation of mobile dropdown element
hamburgerBtn.addEventListener('click', event => {
    loginSignUp.forEach(item => item.classList.toggle('no-show'))
    dropDown.classList.toggle('animation')
})


// Navbar/Dropdown button class, will accomadate as many buttons with same functionality
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



//about components


class Cards {
    constructor() {
        
    }
}