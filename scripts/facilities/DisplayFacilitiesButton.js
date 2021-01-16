const contentTarget = document.querySelector('.noteFormContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'getFacilities') {
        const listFacilities = new CustomEvent('getFacilitiesClicked') 
        eventHub.dispatchEvent(listFacilities)
    }
})

export const FacilitiesButton = () => {
    contentTarget.innerHTML += `<button id="getFacilities">Show Facilities</button>`
}