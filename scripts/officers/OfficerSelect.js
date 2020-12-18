import { getOfficers, useOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener('change', event => {
    if (event.target.id === 'officerSelect') {
        const customEvent = new CustomEvent('officerSelected', {
            detail: {officer: event.target.value}
        })
        console.log(customEvent.detail);

        eventHub.dispatchEvent(customEvent);
    }
});

const render = officersCollection => {
    contentTarget.innerHTML = `<select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${
            officersCollection.map(officerObj => {
                return `<option value="${officerObj.id}">${officerObj.name}</option>`
            }).join('')
        }
        </select>`        
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const officerList = useOfficers()
        render(officerList);
    })
}