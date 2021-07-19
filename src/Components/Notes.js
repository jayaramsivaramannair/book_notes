import React from 'react'
import { useParams , useHistory} from 'react-router-dom';

const Notes = (props) => {
    const {bookid} = useParams()
    console.log(bookid)
    const history = useHistory()

    return (
        <div>
            <button onClick={() => history.push('/library')}>Back to Library</button>
            {`You are viewing notes for book ID - ${bookid}`}
        </div>
    )
}

export default Notes