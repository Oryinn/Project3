import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const DeleteButton = styled.button`
    background-color: red;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    font-size: 1em;
    margin: 3px;
`
export default class DeleteUser extends Component {
    state = {
        userId: this.props.userId
    }

    deleteUser = () => {
        console.log(this.props.userId)

        axios.delete(`/api/users/${this.props.userId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/" />)
    }
    return (
      <DeleteButton onClick={this.deleteUser}>Delete</DeleteButton>
    )
  }
}
