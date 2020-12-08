import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Convict } from './Criminal.js'



export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log(criminalArray);
        const contentTarget = document.querySelector('.criminalsContainer');
        criminalArray.forEach(criminal => {
            contentTarget.innerHTML += Convict(criminal);
        });
    });
}
    
