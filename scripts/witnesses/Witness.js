export const Witnesses = witness => {
    return `<section class="witnesses">
        <h4 class="witnesses--name">${witness.name}</h4>
        <div class="witnesses--statement">${witness.statements}</div>
    </section>`
}