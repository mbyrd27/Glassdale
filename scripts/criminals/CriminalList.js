import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'
import { Associate } from '../associates/Associate.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'


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

const render = (criminalCollection, allFacilities, relationships) => {
    contentTarget.innerHTML = criminalCollection.map(criminalObject => {
        const facRelationship = relationships.filter(rel => rel.criminalId === criminalObject.id)

        const facilities = facRelationship.map(facRel => {
            const matchingFacility = allFacilities.find(fac => fac.id === facRel.facilityId)
            return matchingFacility
        })
        return Convict(criminalObject, facilities)
    }).join('')
};

/* OLD
export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log(criminalArray);
        render(criminalArray);
    });
}
*/


export const CriminalList = () => {
    getCriminals()
        .then(getCriminalFacilities)
        .then(getFacilities)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            render(criminals, facilities, crimFac)
        })
}

