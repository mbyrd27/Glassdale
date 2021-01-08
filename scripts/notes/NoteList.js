import { Note } from './Note.js'
import { getNotes, useNotes } from './NoteProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')

//const render = (notes) => {
//    contentTarget.innerHTML = notes.map(note => Note(note)).join('');
//}
const render = (noteList, criminalList) => {
    contentTarget.innerHTML = noteList.map(note => {
        const matchingCriminal = criminalList.find(criminal => criminal.id === note.criminalId)
        return Note(note, matchingCriminal);
    })
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
        


