import { Witnesses } from './Witness.js'
import { getWitnesses, useWitnesses } from './WitnessProvider.js'

const contentTarget = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')

const renderWitnesses = () => {
    contentTarget.innerHTML = ''
    getWitnesses()
    .then(() => {
        const witnessList = useWitnesses();
        contentTarget.innerHTML += witnessList.map(witness => Witnesses(witness)).join('')
    })
}

eventHub.addEventListener('getWitnessesClicked', renderWitnesses)