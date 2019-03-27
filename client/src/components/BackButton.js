import React, { Component } from 'react'
import styled from 'styled-components'
import {Link, Redirect} from 'react-router-dom'
const Button = styled.button`
    background-color: lightblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 3px;
    
`
export default class BackButton extends Component {
    state = {
        redirect: false
    }
    redirect = () => {
        this.setState({redirect: true})
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/" />)
    }
    return (
      <Button onClick={this.redirect}>
          <Link href="/">Back</Link>
      </Button>
    )
  }
}
