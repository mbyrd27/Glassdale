export const Note = (noteData, criminalName) => {
    return `<section class="note">
        <h4 class="note--title">${criminalName.name}</h4>
        <div class="note--author"><strong>Author: </strong>${noteData.author}</div>
        <div class="note--content">${noteData.content}</div>
        <div class="note--date"><strong>Date: </strong>${new Date(noteData.timestamp).toLocaleDateString('en-US')}</div>
        <button id="deleteNote--${noteData.id}">Delete Note</button>
        </section>`
}
