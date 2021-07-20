import React from 'react';

const NoteCard = ({note}) => {
    return (
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
            <div className="content">
                <h3>Type: {note.Category}</h3>
                <h3>Content: {`"${note.Content}"`}</h3>
            </div>
        </div >
    )
}

export default NoteCard