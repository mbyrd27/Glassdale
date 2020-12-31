const contentTarget = document.querySelector('.noteFormContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'getWitnesses') {
        const listWitnesses = new CustomEvent('getWitnessesClicked') 
        eventHub.dispatchEvent(listWitnesses)
    }
})

export const WitnessButton = () => {
    contentTarget.innerHTML += `<button id="getWitnesses">Get Witnesses</button>`
}