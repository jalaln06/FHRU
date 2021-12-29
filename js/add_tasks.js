const tableTemplate = document.getElementById('table-template')
const templateContainer = document.getElementById('tasks')
let tr = tableTemplate.content.querySelector('tr')
const errorMessage = document.getElementById('todo-error-message')
const generateButton = document.getElementById('table-generate-data')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let usedIndexes = []

generateButton.addEventListener('click', function (e) {
    if (navigator.onLine) {
        fetch('https://my-json-server.typicode.com/jalaln06/mock-json-for-web-2/tasks')
            .then(response => response.json())
            .then(json => {
                if (usedIndexes.length !== 9) {
                    if (!errorMessage.classList.contains("not-active")){
                        errorMessage.classList.add("not-active")
                    }
                    const index = getRandomInt(0, 9)
                    usedIndexes.push(index)
                    const data = json[index]
                    tr = document.importNode(tr, true)
                    tr.querySelector('#tasks-stack').innerHTML = data["stack"]
                    tr.querySelector('#tasks-payment').innerHTML = data['payment_per_hour']
                    tr.querySelector('#tasks-hours-to-work').innerHTML = data['hours_to_work']
                    tr.querySelector('#tasks-rating-wanted').innerHTML = data['rating_wanted']
                    templateContainer.appendChild(tr)
                }
            })
            .catch((reason => {
            errorMessage.classList.remove("not-active")
        }))
    } else {
        errorMessage.classList.remove("not-active")
    }
})