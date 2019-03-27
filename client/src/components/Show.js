import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import UpdateShow from './UpdateShow'
import moment from 'moment'

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
const BackButton = styled.button`
    background-color: lightblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 3px;
    
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
justify-content: center;
align-items: center;
grid-column-start: 2;
`
const ComedianDiv = styled.div`
grid-column-start: 2;
grid-row-start: 3;
`
const DateDiv = styled.div`
grid-column-start: 2;
grid-row-start: 4;
`
const LocationDiv = styled.div`
grid-column-start: 2;
grid-row-start: 6;
`
const TicketsDiv = styled.div`
grid-column-start: 2;
grid-row-start: 5;
`


export default class Show extends Component {
    state = {
        showId: this.props.match.params.id,
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
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <MainDiv>
                <HeaderDiv>
                    <h2>{this.state.show.name}</h2>
                </HeaderDiv>

                <ShowButtons>
                    <BackButton><Link to="/">Back</Link> </BackButton>
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
                    <h4>Presented by: {this.state.show.comedian}</h4>
                </ComedianDiv>

                <DateDiv >
                    <h3>Date: {moment(this.state.show.date).format('MMMM Do YYYY')}</h3>
                </DateDiv>

                <TicketsDiv >
                    <h4><a href={this.state.show.tickets}>Ticket Link!</a></h4>
                </TicketsDiv>

                <LocationDiv >
                    <h5>Address: <a href={`https://www.google.com/maps/search/${this.state.mapsLocation}`}>{this.state.show.location}</a></h5>
                </LocationDiv>

            </MainDiv>
        )
    }
}
