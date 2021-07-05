import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js'
import Landing from './Components/Landing.js'
import LoginForm from './Components/LoginForm.js'

function App() {
  return (
    <div className="App ui container">
      {/*Home page will be defaulted to if no other routes are found*/}
      <Switch>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route path="/">
          <Landing />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
