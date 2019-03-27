import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from './components/Shows.js'
import Show from './components/Show.js'
import CreateShow from './components/CreateShow'
import UpdateShow from './components/UpdateShow'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import UserIndex from './components/UserIndex'
class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Switch>
          <Route exact path="/" component = {Shows} />
          <Route exact path="/login" component = {LogIn} />
          <Route exact path="/signup" component = {SignUp} />
          <Route exact path="/users" component = {UserIndex} />
          <Route path="/shows/new" component = {CreateShow} />
          <Route path="/shows/:showId" component = {Show} />
          <Route path="/shows/:showId/edit" component = {UpdateShow} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
