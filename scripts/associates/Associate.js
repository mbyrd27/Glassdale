export const Associate = (person) => {
    return `
    <h4 class="alibi--title">Known Associates and Alibis</h4>
    <div class="criminals--associates"><strong>Name: </strong>${person.name}</div>
    <div class="criminals--associates"><strong>Alibi: </strong>${person.alibi}</div>
    `
}