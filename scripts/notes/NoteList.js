import { Note } from './Note.js'
import { getNotes, useNotes, deleteNote } from './NoteProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')

const render = (noteList, criminalList) => {
    contentTarget.innerHTML = noteList.map(note => {
        const matchingCriminal = criminalList.find(criminal => criminal.id === note.criminalId)
        return Note(note, matchingCriminal);
    }).join('')
}

const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes();
            const criminals = useCriminals();
            render(notes, criminals);
        })
}

eventHub.addEventListener('showNotesClicked', NoteList);
eventHub.addEventListener('noteStateChanged', NoteList);
        
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('deleteNote--')) {
        const [prefix, id] = clickEvent.target.id.split('--')
        deleteNote(id).then(() => {
            const updatedNotes = useNotes()
            const criminals = useCriminals()
            render(updatedNotes, criminals)
        })
    }
})

