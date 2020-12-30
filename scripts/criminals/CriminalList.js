import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'
import { Associate } from '../associates/Associate.js';

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.criminalsContainer');

eventHub.addEventListener('alibiClicked', event => {
    const allCriminals = useCriminals();
    const matchingCriminal = allCriminals.find(criminal => {
        return event.detail.chosenAlibi === criminal.id
    })
    const criminalAssociates = matchingCriminal.known_associates;
    let additionalContentTarget = document.querySelector(`.criminal${matchingCriminal.id}`)
    criminalAssociates.forEach(associate => {
        additionalContentTarget.innerHTML += Associate(associate);
    })

    
})

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
    
