const data = JSON.parse(localStorage.getItem('freelancers'))
const freelancerTemplate = document.getElementById('freelancer-list-item')
const templateContainer = document.getElementById('freelancer-list-container')
let freelancerCard = freelancerTemplate.content.querySelector('.freelancer-list__item')

if (data !== undefined) {
    for (const username in data) {
        freelancerCard = document.importNode(freelancerCard, true)
        const valueHolders = freelancerCard.getElementsByClassName("freelancer-list__text")
        for (const valueHolder of valueHolders) {
            const attributeName = valueHolder.getAttribute('datatype')
            valueHolder.innerHTML = data[username][attributeName]
        }
        freelancerCard.getElementsByClassName('freelancer-list__image')[0].setAttribute('src', data[username]['image'])
        freelancerCard.getElementsByClassName('freelancer-list__name')[0].innerHTML =  username
        templateContainer.prepend(freelancerCard)
    }
}