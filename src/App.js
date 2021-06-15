import React, { useState } from 'react'
import Dashboard from './Components/Dashboard.js'

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
      <Dashboard
        assignResults={assignResults}
        setLoading={changeLoadingStatus}
        loading={loading}
        bookResults={results}
      />
    </div>
  );
}

export default App;
