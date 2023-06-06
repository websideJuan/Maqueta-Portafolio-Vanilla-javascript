const inputValue = document.getElementById('input_seatch')
const navbarSearch = document.querySelector('.navbar_search')
const arrayElement =[...document.querySelectorAll('a')]
const ulElement = document.createElement('ol')


function main () {
    const listElement = document.querySelectorAll('.nb-main-item')
    let newListElement = []
    
    for (let i = 0; i < listElement.length; i++) {
        const element = listElement[i]
        newListElement.push(element)
    }

    return newListElement
}

const newArray = main()

newArray.forEach(item => {
    item.addEventListener('click', function(e) {showNavbar(e)})
})

const showNavbar = (e) => {
    const elementNode = e.target.querySelector('.navbar_dropdwon')
    if(elementNode.classList.contains('navbar_show')) {
        elementNode.classList.remove('navbar_show')
        return
    }
    elementNode.classList.add('navbar_show')
}

inputValue.addEventListener('keyup', function (e) {

    ulElement.classList = 'listaDeSugerencia'

    function createdLinks (direction, text) {
        return `<li><a href=${direction}>${text.toLowerCase()}</li>`
    }

    const newElement = arrayElement.map(item => {
        const {textContent} = item
        const uriElement = item.getAttribute('href')
        return createdLinks(uriElement, textContent)
    })

    const filterElemet = newElement.filter(item =>  {
        if(inputValue.value === '') {
            ulElement.innerHTML = ''
            return
        }
        return item.includes(e.target.value)
    }).join('')

    ulElement.innerHTML = filterElemet
    navbarSearch.appendChild(ulElement) 

})