import Note from "./Note";
import './Note.css';

const NotesList = ({ notes, searchText }) => {
    const filteredNotes = [];

    notes.forEach(note => {
        if (searchText) {
            if (note.title.toLowerCase().includes(searchText) 
                || note.text.toLowerCase().includes(searchText)) {
                filteredNotes.push(note);
            }
        } else {
            filteredNotes.push(note);
        }
    });

    return (
        <>
            <h2>Notes</h2>
            <div className="notes">
                {filteredNotes.map((note) => (
                    <div key={note.id}>
                        <Note note={note} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default NotesList;
