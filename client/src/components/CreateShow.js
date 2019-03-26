import React, { Component } from 'react'
import axios from 'axios'
export default class CreateShow extends Component {
    state = {
        newShow: {
            name: '',
            comedian: '',
            date: '',
            location: '',
            tickets: ''

        }
    }
    handleNewShowChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newShow = { ...this.state.newShow };
        newShow[attributeName] = attributeValue;

        this.setState({ newShow })
    };

    addNewShow = (evt) => {
        evt.preventDefault();
        this.props.addNewShowToShowList(this.state.newShow)
        axios
            .post('/api/shows', {
                name: this.state.newShow.name,
                description: this.state.newShow.comedian,
                date: this.state.newShow.date,
                location: this.state.newShow.location,
                tickets: this.state.newShow.tickets
            })
            
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewShow}>
                    <div>
                        <input
                            type='text'
                            name="name"
                            placeholder="Show Name"
                            value={this.state.newShow.name}
                            onChange={this.handleNewShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="comedian"
                            placeholder="Comedian Name"
                            value={this.state.newShow.comedian}
                            onChange={this.handleNewShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='date'
                            name="date"
                            placeholder="Show Date"
                            value={this.state.newShow.date}
                            onChange={this.handleNewShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="location"
                            placeholder="Show Location"
                            value={this.state.newShow.location}
                            onChange={this.handleNewShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="tickets"
                            placeholder="Ticket Link"
                            value={this.state.newShow.tickets}
                            onChange={this.handleNewShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create New Show"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
