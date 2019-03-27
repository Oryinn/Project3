import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from './components/Shows.js'
import Show from './components/Show.js'
import CreateShow from './components/CreateShow'
import UpdateShow from './components/UpdateShow'
import LogIn from './components/LogIn'
class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Switch>
          <Route exact path="/" component = {Shows} />
          <Route exact path="/login" component = {LogIn} />
          <Route path="/shows/new" component = {CreateShow} />
          <Route path="/:id" component = {Show} />
          <Route path="/:id/edit" component = {UpdateShow} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
