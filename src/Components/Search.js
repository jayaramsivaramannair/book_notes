import React, { useState } from 'react'
import axios from 'axios'

const API = 'AIzaSyBVrXAK-6urEQXprz3uJMZOomYQwgXtj0Y'

export default function Search({ assignResults, setLoading, loading }) {

    const [term, setTerm] = useState("")

    const startSearch = (event) => {
        setTerm(event.target.value)
        console.log(term)

    }


    const handleSearch = async (event) => {
        //Empties the array
        assignResults([])
        console.log('Button Clicked!')
        setLoading(true)
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API}`)

        console.log(books.data.items)
        setLoading(false)
        assignResults(books.data.items)
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
