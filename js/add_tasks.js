const tableTemplate = document.getElementById('table-template')
const templateContainer = document.getElementById('tasks')
let tr = tableTemplate.content.querySelector('tr')

const generateButton = document.getElementById('table-generate-data')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
let usedIndexes = []

generateButton.addEventListener('click', function (e){
    e.preventDefault()
    fetch('https://my-json-server.typicode.com/jalaln06/mock-json-for-web-2/tasks')
        .then(response => response.json())
        .then(json =>{
            if (usedIndexes.length !== 9) {
                const index = getRandomInt(0, 9)
                usedIndexes.push(index)
                const data = json[index]
                console.log(data)
                tr = document.importNode(tr, true)
                tr.querySelector('#tasks-stack').innerHTML = data["stack"]
                tr.querySelector('#tasks-payment').innerHTML = data['payment_per_hour']
                tr.querySelector('#tasks-hours-to-work').innerHTML = data['hours_to_work']
                tr.querySelector('#tasks-rating-wanted').innerHTML = data['rating_wanted']
                templateContainer.appendChild(tr)
            }
        })
})