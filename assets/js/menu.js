//select button menu and mobile menu
const buttonMn = document.querySelector('.button-menu')
const mobileMn = document.querySelector('.mobile-menu')
//select navbar for desktop
const menu = document.querySelector('#navbar')
//function to activate mobile menu
buttonMn.addEventListener('click', () => {
    if(mobileMn.classList.contains('open')){
        mobileMn.classList.remove('open')
    } else {
        mobileMn.classList.add('open')
    }
})
//function for close menu with click event
function removeClassOpen() {
    mobileMn.classList.remove('open')
}
//function to change the color of the menu in the scrolling event 
window.addEventListener('scroll', () => {
    if (scrollY > 10) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
})