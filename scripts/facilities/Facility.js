export const Facility = (facilities, criminal) => {
    return `
    <section class="facilities criminal${facilities.id}">
        <h4 class="facilities--name">${facilities.facilityName}</h4>
        <div class="facilities--age"><strong>Security Level: </strong> ${facilities.securityLevel}</div>
        <div class="facilities--crime"><strong>Capacity: </strong> ${facilities.capacity}</div>
        <div class="facilities--criminals">
            <h4>Criminals</h4>
            <ul>
                ${criminal.map(crim => `<li>${crim.name}</li>`).join('')}
            </ul>
        </div>
    </section>`
}