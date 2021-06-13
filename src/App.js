import React, { useState } from 'react'
import Search from './Components/Search.js'
import Results from './Components/Results.js'
import BookCard from './Components/BookCard.js'

function App() {

  const [results, setResults] = useState('')

  const assignResults = (results) => {
    setResults(results)
  }


  return (
    <div className="App ui container">
      <h1>Book Notes</h1>
      <Search assignResults={assignResults} />
      <Results bookResults={results} />
      <BookCard bookResults={results} />
    </div>
  );
}

export default App;
