import React, { useState } from 'react'
import axios from 'axios'

export default function Search({ assignResults }) {

    const [term, setTerm] = useState("")

    const startSearch = (event) => {
        setTerm(event.target.value)
        console.log(term)

    }

    const handleSearch = async (event) => {
        console.log('Button Clicked!')
        const books = await axios.get(`http://openlibrary.org/search.json?q=${term}`)
        //Picks the first result from the results
        console.log(books.data.docs[0].isbn[0])
        //Searches book cover by isbn
        const specificBook = await axios.get(`http://covers.openlibrary.org/b/isbn/${books.data.docs[0].isbn[0]}-M.jpg`)
        console.log(specificBook.config.url)
        assignResults(specificBook.config.url)
    }
    return (
        <div className="ui action input container">
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
