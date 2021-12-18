const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)

function addAttributeToPage(elementID, value = undefined){
    const element = document.getElementById(elementID)
    if (value === undefined){
        element.innerText = element.innerText + " " + params[elementID]
    }
    else
        element.innerText = element.innerText + " " + value
}
elementsToAddValues = ["freelancer-name", "freelancer-surname", "freelancer-stack", 'freelancer-payment']
for (const elem of elementsToAddValues){
    addAttributeToPage(elem)
}
addAttributeToPage('freelancer-rating', 0)
imageSource =  localStorage.getItem('imageSource')
if (imageSource !== undefined){
    document.getElementById('freelancer-image').setAttribute('src', imageSource)
}