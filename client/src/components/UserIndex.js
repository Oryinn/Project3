import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 10vh 12vh auto;
  /* justify-content: center; */
  flex-wrap: wrap;
`

export default class UserIndex extends Component {
    state = {
        users: []
    }
    componentDidMount = () => {
        axios.get(`/api/users`).then(res => {
            this.setState({ users: res.data })
        })
    }

    deleteUser = () => {
        axios.delete(`/api/users/${this.state.showId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }
    render() {
        const users = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                <h4>
                    {user.name} - {user.email}
                </h4>
                <hr />
                </div>
            )
        })
        return (
            <MainDiv >
                <div>
                    test
                </div>
            </MainDiv>
        )
    }
}