const popupButton = document.getElementById('burger-menu')
const popupToggle = document.getElementById('burger-menu-toggle')
const popupNavigation = document.getElementById('popup-navigation')
window.onload = function (){
    if (window.innerWidth < 1000){
        popupNavigation.style.display = 'block'
    }
}
window.addEventListener('resize', function (){
    if (window.innerWidth > 1000){
        popupNavigation.style.display = 'none'
    }
    else {
        popupNavigation.style.display = 'block'
    }
})
popupButton.addEventListener('click', function (e){
    e.preventDefault()
    if (popupToggle.classList.contains('is-active')){
        popupToggle.classList.remove('is-active')
        popupToggle.style.borderTop = '2.5px solid'
        popupToggle.style.borderBottom = '2.5px solid'
        popupNavigation.style.transform = 'translate(100% , 0)'
    }
    else{
        popupToggle.classList.add('is-active')
        popupToggle.style.border = '0'
        popupNavigation.style.transform = 'none'
    }
})
