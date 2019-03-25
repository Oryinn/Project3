import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from './components/Shows.js'
import Show from './components/Show.js'
class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Switch>
          <Route exact path="/" component = {Shows} />
          <Route path="/:id" component = {Show} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
