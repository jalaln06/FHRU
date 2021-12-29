const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const existingProfileHandler = document.getElementById('profile-already-exists-block')
const freelancerCardSuccessHandler = document.getElementById('freelancer-card-success-handler')
const newNicknameInput = document.getElementById('freelancer-new-nickname')

function addAttributeToPage(elementID, value = undefined) {
    const element = document.getElementById(elementID)
    if (value === undefined) {
        element.innerText = element.innerText + " " + params[elementID]
    } else
        element.innerText = element.innerText + " " + value
}

//render page values
elementsToAddValues = ["freelancer-name", "freelancer-surname", "freelancer-stack", 'freelancer-payment', "freelancer-nickname"]
for (const elem of elementsToAddValues) {
    addAttributeToPage(elem)
}
addAttributeToPage('freelancer-rating', 0)

imageSource = localStorage.getItem('imageSource')

if (imageSource === "undefined") {
    imageSource = "images/gribnoi_sup.png"
}
document.getElementById('freelancer-image').setAttribute('src', imageSource)

//add freelancer to storage if possible
let freelancers = JSON.parse(localStorage.getItem('freelancers'))
if (freelancers === null) {
    freelancers = {}
}

function checkFreelancer(username) {
    if (freelancers.hasOwnProperty(username)) {
        existingProfileHandler.classList.remove('not-active')
        return false
    } else {
        freelancerCardSuccessHandler.classList.remove('not-active')
        addFreelancerToStorage(username)
        return true
    }
}

function addFreelancerToStorage(username) {
    freelancers[username] = {
        name_surname: `${params['freelancer-name']} ${params['freelancer-surname']}`,
        stack: params["freelancer-stack"],
        payment: params["freelancer-payment"],
        rating: 0,
        image: imageSource
    }
    localStorage.setItem('freelancers', JSON.stringify(freelancers))
}

let username = params["freelancer-nickname"]
checkFreelancer(username)

document.getElementById("exists-nickname-button").addEventListener('click', function () {
    username = newNicknameInput.value
    existingProfileHandler.classList.add('not-active')
    let res = checkFreelancer(username)
    if(!res) {
        location.reload()
        return false
    }
})