export const Note = (noteData) => {
    return `<section class="note">
        <h4 class="note--title">${noteData.title}</h4>
        <div class="note--author"><strong>Author: </strong>${noteData.author}</div>
        <div class="note--content">${noteData.content}</div>
        <div class="note--date"><strong>Date: </strong>${new Date(noteData.timestamp).toLocaleDateString('en-US')}</div>
        </section>`
}
