import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js'

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.criminalsContainer');


eventHub.addEventListener('crimeChosen', event => {
    const chosenCrimeId = event.detail.crimeThatWasChosen;
    const convictions = useConvictions();
    const crimeObj = convictions.find(crime => {
        return parseInt(chosenCrimeId) === crime.id
    });
    const allCriminals = useCriminals();
    const matchingCriminals = allCriminals.filter(criminal => {
        return crimeObj.name === criminal.conviction
    })
    console.log(matchingCriminals)
    render(matchingCriminals);

    }
);

eventHub.addEventListener('officerSelected', event => {
    const chosenOfficerId = parseInt(event.detail.officer); //officerID
    const policeOfficers = useOfficers();
    const officerName = policeOfficers.find(cop => {
        return chosenOfficerId === cop.id
    });
    
    const allCriminals = useCriminals();
    const matchingCriminals = allCriminals.filter(criminal => {
        return officerName.name === criminal.arrestingOfficer
    });
    console.log(matchingCriminals);

    render(matchingCriminals);
})

const render = criminalCollection => {
    contentTarget.innerHTML = ''
    criminalCollection.forEach(criminal => {
        contentTarget.innerHTML += Convict(criminal);
    })
}

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log(criminalArray);
        render(criminalArray);
    });
}
    
