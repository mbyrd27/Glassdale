import { getConvictions, useConvictions } from './ConvictionProvider.js'

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        const convictionList = useConvictions();
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
           <option value="0">Please select a crime...</option>
           ${
               convictionList.map(crimeObj => {
                   const crime = crimeObj.name
                   return `<option>${crime}</option>`
               })
           }
        </select>`
    });
}

