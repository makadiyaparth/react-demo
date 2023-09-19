import './Note.css';

const Note = ({ note }) => {
    return (
        <div className="note">
            <div className="title">
                {note.title}
            </div>
            <div className="text">
                {note.text}
            </div>
        </div>
    );
};

export default Note;
