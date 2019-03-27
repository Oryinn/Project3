import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import UpdateShow from './UpdateShow'
import moment from 'moment'
import BackButton from './BackButton'

const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 10vh 10vh 10vh 10vh 10vh;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`

const DeleteButton = styled.button`
    background-color: red;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 3px;
`
const UpdateButton = styled.button`
    background-color: lavenderblush;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 3px;
`
const HeaderDiv = styled.div`
align-items: center;
text-align: center;
grid-column-start: 2;
grid-row-start: 1;
`
const ShowButtons = styled.div`
display: inline;
justify-content: space-evenly;
align-items: center;
grid-column-start: 2;
text-align: center;
`
const ComedianDiv = styled.div`
grid-column-start: 2;
grid-row-start: 3;
text-align: center;
`
const DateDiv = styled.div`
grid-column-start: 2;
grid-row-start: 4;
text-align: center;
`
const LocationDiv = styled.div`
grid-column-start: 2;
grid-row-start: 6;
text-align: center;
`
const TicketsDiv = styled.div`
grid-column-start: 2;
grid-row-start: 5;
text-align: center;
`



export default class Show extends Component {
    state = {
        showId: this.props.match.params.showId,
        updateFormOpen: false,
        show: {
            name: '',
            comedian: '',
            date: '',
            location: '',
            tickets: ''
        },
        redirect: false,
        mapsLocation: '',
    }
    componentDidMount = () => {
        
        axios.get(`/api/shows/${this.state.showId}`).then(res => {
            this.setState({ show: res.data })
        }).then(()=> {
        this.addressHandler()
    })
    }

    handleUpdateShowForm = () => {
        const updateShowForm = !this.state.updateFormOpen
        this.setState({ updateFormOpen: updateShowForm })
      }

    deleteShow = () => {
        axios.delete(`/api/shows/${this.state.showId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }

    addressHandler = () => {
        var updatedLocation = this.state.show.location
        updatedLocation = updatedLocation.split(' ').join('+')
            this.setState({ mapsLocation : updatedLocation })
    }

    render() {
        const ticketURL = this.state.show.tickets
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <MainDiv>
                <HeaderDiv>
                    <h2>{this.state.show.name}</h2>
                </HeaderDiv>

                <ShowButtons>
                    <BackButton />
                    <DeleteButton onClick={this.deleteShow}>Delete</DeleteButton>
                    <UpdateButton onClick={this.handleUpdateShowForm}>Update</UpdateButton>
                </ShowButtons>

                {this.state.updateFormOpen ?
                <UpdateShow 
                show = {this.state.show}
                handleUpdateShowForm = {this.handleUpdateShowForm}
                showId = {this.state.showId}
                /> : null }
            
                <ComedianDiv >
                    <h2>Presented by: {this.state.show.comedian}</h2>
                </ComedianDiv>

                <DateDiv >
                    <h3>Date: {moment(this.state.show.date).format('MMMM Do YYYY')}</h3>
                </DateDiv>

                <TicketsDiv >
                    <h4><a href={`https://${ticketURL}`}>Ticket Link!</a></h4>
                </TicketsDiv>

                <LocationDiv >
                    <h4>Address: <a href={`https://www.google.com/maps/search/${this.state.mapsLocation}`}>{this.state.show.location}</a></h4>
                </LocationDiv>
            
            </MainDiv>
        )
    }
}
