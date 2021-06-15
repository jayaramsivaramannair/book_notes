import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js'
import Home from './Components/Home.js'

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
      {/*Home page will be defaulted to if no other routes are found*/}
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard
            assignResults={assignResults}
            setLoading={changeLoadingStatus}
            loading={loading}
            bookResults={results}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
