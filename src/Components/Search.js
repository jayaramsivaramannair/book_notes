import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchBooks, startFetching } from '../actions';

/*
const API = 'AIzaSyBVrXAK-6urEQXprz3uJMZOomYQwgXtj0Y'
*/

const Search = ({ fetchBooks, startFetching, loading }) => {

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
            <button className={`ui primary ${(loading) ? 'loading' : ''} button`} onClick={handleSearch}>Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading,
    }
}

export default connect(mapStateToProps, { fetchBooks, startFetching })(Search)
