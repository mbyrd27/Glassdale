import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { ShowNoteButton } from "./ShowNotes.js";
import { WitnessButton } from "../witnesses/WitnessButton.js";

const contentTarget = document.querySelector('.noteFormContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', (event) => {
    if (event.target.id === 'saveNote') {

        const noteAuthor = document.querySelector('#note--author');
        const noteContent = document.querySelector('#note--content');
        const dropdownSelector = document.getElementById('note--criminal')
        const criminalIdentifier = parseInt(dropdownSelector[dropdownSelector.selectedIndex].value)
            


        const newNote = {
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now(),
            criminalId: criminalIdentifier
        }
        

        saveNote(newNote);
        
    }
})

const render = (subject) => {
    contentTarget.innerHTML = `
    <select id="note--criminal" class="criminalSelect">
        <option value="0">--Select a Subject Offender--</option>
        ${
            subject.map(criminal => {
                return `<option value="${criminal.id}">${criminal.name}</option>`
            })
        }
    </select>
    <input type ="text" id="note--author" placeholder="Your name here"/>
    <textarea id="note--content" placeholder="Note text here"></textarea>
    <button type="button" id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminalList = useCriminals()
            render(criminalList);
            ShowNoteButton();
            WitnessButton();
        })
        
}