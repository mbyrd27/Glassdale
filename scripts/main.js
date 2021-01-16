import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js';
import { NoteForm } from './notes/NoteForm.js';
import './notes/NoteList.js'
import './associates/AssociateSelect.js'
import './witnesses/WitnessList.js'
import './facilities/FacilityList.js'

NoteForm();

CriminalList();

ConvictionSelect();

OfficerSelect();
