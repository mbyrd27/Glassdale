import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js';
import { NoteForm } from './notes/NoteForm.js';
import { ShowNoteButton } from './notes/ShowNotes.js';
import './notes/NoteList.js'

NoteForm();

CriminalList();

ConvictionSelect();

OfficerSelect();

ShowNoteButton();