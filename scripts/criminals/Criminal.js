export const Convict = (criminal) => {
    return `
    <section class="criminals criminal${criminal.id}">
        <h4 class="criminals--name">${criminal.name}</h4>
        <div class="criminals--age"><strong>Age:</strong> ${criminal.age}</div>
        <div class="criminals--crime"><strong>Crime:</strong> ${criminal.conviction}</div>
        <div class="criminals--termStart"><strong>Term Start:</strong> 
            ${new Date(criminal.incarceration.start).toLocaleDateString("en-US")}</div>
        <div class="criminals--termEnd"><strong>Term End:</strong>
            ${new Date(criminal.incarceration.end).toLocaleDateString("en-US")}</div>
        <button type="button" class="associate-btn" id="${criminal.id}">Associate Alibis</button>
    </section>`
}