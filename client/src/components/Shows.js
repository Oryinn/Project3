import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import CreateShow from './CreateShow.js'
const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 10vh 12vh auto;
  /* justify-content: center; */
  flex-wrap: wrap;
`
const AddButton = styled.button`
    background-color: lightgreen;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`
const LoginButton = styled.button`
    background-color: lightsteelblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`
const SignUpButton = styled.button`
    background-color: lightsteelblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`

const SignOutButton = styled.button`
    background-color: lightsteelblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`

const HeaderDiv = styled.div`
align-content: center;
text-align: center;
grid-column: 2;
grid-row: 1;
`
const ButtonDiv = styled.div`
align-items: center;
grid-column: 2;
grid-row: 2;
text-align: center;
`
const ShowsDiv = styled.div`
align-items: flex-start;
grid-column: 2;
grid-row: 4;
`
const SubHeaderDiv = styled.div`
align-items: center;
grid-column: 2;
grid-row: 3;
text-align: center;
`

export default class Home extends Component {
  state = {
    shows: [],
    createFormOpen: false,
    isLoggedIn: false,
  }
  componentDidMount = () => {
    axios.get(`/api/shows`).then(res => {
      this.setState({ shows: res.data })

      this.sortShowsByDate()
    
    }).then(()=> {
      this.setState({shows: this.state.shows})
    })
  }

  addNewShowToShowList = (newShow) => {
    const newShowList = [...this.state.shows]
    newShowList.push(newShow)

    this.setState({ shows: newShowList })
  }

  handleCreateShowForm = () => {
    const addShowView = !this.state.createFormOpen
    this.setState({ createFormOpen: addShowView })
  }

  sortShowsByDate = () => {
    this.state.shows.sort(function (a, b) {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA - dateB
    })
  }

  render() {
    const shows = this.state.shows.map((show, i) => {
      return (
        <div key={i}>
          <h4>
            <Link
              to={`/shows/${show._id}`}

            >{show.name}</Link>
            - {moment(show.date).format('MMMM Do YYYY')}
          </h4>
          <hr />
        </div>
      )
    })

    return (
      <MainDiv>
        <HeaderDiv>
          <h1>Comedy Tracker</h1>

        </HeaderDiv>
        {this.state.createFormOpen ?
          null
          :
          <SubHeaderDiv>
            <h2>Upcoming Shows: </h2>
          </SubHeaderDiv>}

        <ButtonDiv>
          <AddButton onClick={this.handleCreateShowForm}>Add Show</AddButton>
          <LoginButton ><Link to="/users">Users</Link></LoginButton>
          {this.isLoggedIn ?
          <SignOutButton >Sign Out</SignOutButton>
          :
          <span>
          <LoginButton ><Link to="/login">Log In</Link></LoginButton>
          <SignUpButton ><Link to="/signup">Sign Up</Link></SignUpButton>
          </span>
          
          }
          
          {this.state.createFormOpen
            ?
            <CreateShow
              addNewShowToShowList={this.addNewShowToShowList}
              handleCreateShowForm={this.handleCreateShowForm}
            />
            : null
          }
          
        </ButtonDiv>

        <ShowsDiv>
          {shows}
        </ShowsDiv>
      </MainDiv>
    )
  }
}
