import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

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
            //console.log(crimeObj.name);
            //console.log(criminal.conviction)
            return crimeObj.name === criminal.conviction
        })
        console.log(matchingCriminals)

        //render thingy
        render(matchingCriminals);

    }
)

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
    
