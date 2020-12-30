import { Note } from './Note.js'
import { getNotes, useNotes } from './NoteProvider.js'

const contentTarget = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('showNotesClicked', clickEvent => {
    getNotes()
        .then(() => {
            const noteList = useNotes();
            contentTarget.innerHTML += noteList.map(currentNote => Note(currentNote)).join('');
        })
})

