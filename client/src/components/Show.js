import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
const MainDiv = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
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
align-items: flex-start;
text-align: center;
`
const ShowButtons = styled.div`
display: inline;
`


export default class Show extends Component {
    state = {
        showId: this.props.match.params.id,
        show: {
            name: '',
            comedian: '',
            date: '',
            location: '',
            tickets: ''
        }
    }
    componentDidMount = () => {
        axios.get(`/api/shows/${this.state.showId}`).then(res => {
            this.setState({ show: res.data })
        })
    }

    deleteShow = () => {
        axios.delete(`/api/shows/${this.state.showId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }

    render() {
        return (
            <MainDiv>
                <HeaderDiv>
                    <h2>{this.state.show.name}</h2>
                </HeaderDiv>
                <ShowButtons>
                    <BackButton><Link to="/">Back</Link> </BackButton>
                    <DeleteButton onClick={this.deleteShow}>Delete</DeleteButton>
                    <UpdateButton >Update</UpdateButton>
                </ShowButtons>
            </MainDiv>
        )
    }
}