
export function handlerAsidebar() {
    document.addEventListener('click', function (e) {

        let indexElement
        const {classList, dataset} = e.target

        if (classList.contains('next-page')) {
            indexElement = parseInt(dataset.id)
            indexElementM(indexElement)
            return
        }

    })

    const indexElementM = (n) => {
        const veiwActualPage = document.querySelectorAll('.asdbr-nav-link')

        if (n === 0) {
            veiwActualPage[0].parentElement.classList.add('activate')
            veiwActualPage[veiwActualPage.length -1].parentElement.classList.remove('activate')
            return
        }

        veiwActualPage[n].parentElement.classList.add('activate')
        veiwActualPage[n - 1].parentElement.classList.remove('activate')
    }


}






















// const validateUltimateLink = this.dataset.location
// if (validateUltimateLink === 'Inicio') {}