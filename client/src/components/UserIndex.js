import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DeleteUser from './DeleteUser'
import BackButton from './BackButton'

const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 10vh auto;
  /* justify-content: center; */
  flex-wrap: wrap;
`
const UsersDiv = styled.div`
align-items: flex-start;
grid-column: 2;
grid-row: 3;
text-align: center;
`

const HeaderDiv = styled.div`
align-items: center;
text-align: center;
grid-column-start: 2;
grid-row-start: 1;
`
const ButtonDiv = styled.div`
    align-items: center;
    grid-column: 2;
    grid-row: 2;
    text-align: center;
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


    render() {
        const users = this.state.users.map((user, i) => {

            return (

                <div key={i}>
                    <h4>
                        {user.name} - {user.email} - <DeleteUser userId={user._id} />
                    </h4>
                    <hr />
                </div>
            )
        })
        return (
            <MainDiv >
                <HeaderDiv >
                    <h1>User List</h1>
                </HeaderDiv>
                <ButtonDiv>
                    <BackButton />
                </ButtonDiv>

                <UsersDiv>


                    {users}
                </UsersDiv>
            </MainDiv>
        )
    }
}
