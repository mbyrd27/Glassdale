import { Facility } from './Facility.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.criminalsContainer');

const render = (criminalCollection, allFacilities, relationships) => {
    contentTarget.innerHTML = allFacilities.map(facilityObject => {
        const facRelationship = relationships.filter(rel => rel.facilityId === facilityObject.id)

        const criminals = facRelationship.map(facRel => {
            const matchingCriminal = criminalCollection.find(crim => crim.id === facRel.criminalId)
            return matchingCriminal
        })
        return Facility(facilityObject, criminals)
    }).join('')
};

export const FacilityList = () => {
    getFacilities()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const criminalFacilities = useCriminalFacilities()
            const criminals = useCriminals()
            render(criminals, facilities, criminalFacilities)
        })
}

eventHub.addEventListener('getFacilitiesClicked', FacilityList)