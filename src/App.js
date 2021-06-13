import React, { useState } from 'react'
import Search from './Components/Search.js'
import Results from './Components/Results.js'

function App() {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const assignResults = (results) => {
    setResults(results)
  }

  const changeLoadingStatus = (status) => {
    setLoading(status)
  }


  return (
    <div className="App ui container">
      <h1>Book Notes</h1>
      <Search assignResults={assignResults} setLoading={changeLoadingStatus} loading={loading} />
      <Results bookResults={results} loading={loading} />
    </div>
  );
}

export default App;
