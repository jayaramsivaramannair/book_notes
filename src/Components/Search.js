import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchBooks, startFetching } from '../actions';

/*
const API = 'AIzaSyBVrXAK-6urEQXprz3uJMZOomYQwgXtj0Y'
*/

const Search = ({ fetchBooks, startFetching, books }) => {

    const [term, setTerm] = useState("")

    const startSearch = (event) => {
        setTerm(event.target.value)
        console.log(term)

    }

    const handleSearch = async (event) => {
        console.log('Button Clicked!')
        startFetching();
        fetchBooks(term)
    }

    return (
        <div className="ui action input">
            <input
                type="text"
                placeholder="Search Books..."
                value={term}
                onChange={startSearch}
            />
            <button className="ui button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default connect(null, { fetchBooks, startFetching })(Search)
