import NotesList from "./NotesList";
import {notes} from '../MOCK';
import './Note.css';

const NoteApp = ({searchText}) => {
    return (
        <>
            <NotesList notes={notes} searchText={searchText} />
        </>
    );
}

export default NoteApp;
