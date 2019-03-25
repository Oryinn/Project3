import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

export default class Home extends Component {
  state = {
    shows: []
  }
  componentDidMount = () => {
    axios.get('/api').then(res => {
        this.setState({ shows: res.data })
    })
}

  render() {
    return (
      <div>
        <h1>Upcoming Shows</h1>
          {
            this.state.shows.map(show => {
              return (
                <div key={show._id}>
                  <Link
                  to = {`/${show._id}`}>{show.name}</Link>
              - {moment(show.date).format('MMMM Do YYYY')}
                </div>
              )
            })
          }
      </div>
    )
  }
}
