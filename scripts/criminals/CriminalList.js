import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.criminalsContainer');


eventHub.addEventListener('crimeChosen', event => {
    const allCriminals = useCriminals();
    const matchingCriminals = allCriminals.filter(criminal => {
        return event.detail.crimeThatWasChosen === criminal.conviction
    })

    render(matchingCriminals);

    }
);

eventHub.addEventListener('officerSelected', event => {
    const allCriminals = useCriminals();
    const matchingCriminals = allCriminals.filter(criminal => {
        return event.detail.officer === criminal.arrestingOfficer
    });

    render(matchingCriminals);
});

const render = criminalCollection => {
    contentTarget.innerHTML = ''
    criminalCollection.forEach(criminal => {
        contentTarget.innerHTML += Convict(criminal);
    });
}

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log(criminalArray);
        render(criminalArray);
    });
}
    
