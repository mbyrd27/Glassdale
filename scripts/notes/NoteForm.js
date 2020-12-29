import { saveNote } from "./NoteProvider.js";

const contentTarget = document.querySelector('.noteFormContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', (event) => {
    if (event.target.id === 'saveNote') {

        const noteTitle = document.querySelector('#note--title');
        const noteAuthor = document.querySelector('#note--author');
        const noteContent = document.querySelector('#note--content');

        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now()
        }
        debugger

        saveNote(newNote);
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <form class="noteForm">
        <input type ="text" id="note--title" placeholder="Enter note title"/>
        <input type ="text" id="note--author" placeholder="Your name here"/>
        <textarea id="note--content" placeholder="Note text here"></textarea>
        </textarea>
    </form>
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => render();