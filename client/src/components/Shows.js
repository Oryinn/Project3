import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import CreateShow from './CreateShow.js'
const AddButton = styled.button`
    background-color: lightgreen;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
`
const MainDiv = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
`
const HeaderDiv = styled.div`
align-items: flex-start;
`
const AddDiv = styled.div`
align-items: center;

text-align: center;
`
const ShowsDiv = styled.div`
align-items: flex-end;
`

export default class Home extends Component {
  state = {
    shows: [],
    createFormOpen: false
  }
  componentDidMount = () => {
    axios.get('/api').then(res => {
      this.setState({ shows: res.data })
    })
  }

  addNewShowToShowList = (newShow) => {
    const newShowList = [...this.state.shows]
    newShowList.push(newShow)

    this.setState({ productList: newShowList })
  }

  handleCreateShowForm = () => {
    const addShowView = !this.state.createFormOpen
    this.setState({ createFormOpen: addShowView })
  }

  render() {
    return (
      <MainDiv>
        <HeaderDiv>
          <h1>Upcoming Shows</h1>
          
        </HeaderDiv>
        <AddDiv>
          <AddButton onClick={this.handleCreateShowForm}>Add Show</AddButton>
          {this.state.createFormOpen ?
            <CreateShow /> : null
          }
        </AddDiv>
        <ShowsDiv>
        {
          this.state.shows.map(show => {
            return (
              <div key={show._id}>
                <h4>
                  <Link
                    to={`/${show._id}`}>{show.name}</Link>
                  - {moment(show.date).format('MMMM Do YYYY')}
                </h4>
                <hr />
              </div>
            )
          })
        }
        </ShowsDiv>
      </MainDiv>
    )
  }
}
