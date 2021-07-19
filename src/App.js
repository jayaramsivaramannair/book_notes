import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js'
import PrivateRoute from './Components/PrivateRoute.js'
import Landing from './Components/Landing.js'
import LoginForm from './Components/LoginForm.js'
import Library from './Components/Library.js'
import Notes from './Components/Notes.js'

function App() {
  return (
    <div className="App ui container">
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/library" component={Library} />
        <PrivateRoute exact path="/library/:bookid/notes" component={Notes} />
        <Route exact path="/login">
          <LoginForm />
        </Route>
        {/*Landing page will be defaulted to if no other routes are found*/}
        <Route path="/">
          <Landing />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
