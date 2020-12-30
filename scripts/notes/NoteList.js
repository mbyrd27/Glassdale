import { Note } from './Note.js'
import { getNotes, useNotes } from './NoteProvider.js'

const contentTarget = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')

const render = notes => {
    contentTarget.innerHTML = notes.map(note => Note(note)).join('');
}

const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes();
            render(allNotes);
        });
}

eventHub.addEventListener('showNotesClicked', NoteList);
eventHub.addEventListener('noteStateChanged', NoteList);
        


