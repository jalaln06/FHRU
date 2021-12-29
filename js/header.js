const popupButton = document.getElementById('burger-menu')
const popupToggle = document.getElementById('burger-menu-toggle')
const popupNavigation = document.getElementById('popup-navigation')
const body = document.querySelector('body')

popupButton.addEventListener('click', function (e){
    e.preventDefault()
    if (popupToggle.classList.contains('is-active')){
        popupToggle.classList.remove('is-active')
        popupNavigation.classList.remove('is-active')
        body.classList.remove('stop-scrolling')
    }
    else{
        popupToggle.classList.add('is-active')
        popupNavigation.classList.add('is-active')
        body.classList.add('stop-scrolling')
    }
})
