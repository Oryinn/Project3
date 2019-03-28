import React, { Component } from 'react'
import axios from 'axios'
export default class UpdateShow extends Component {
    state = {
        updateShow: {
            name: '',
            comedian: '',
            date: '',
            location: '',
            tickets: ''

        }
    }
    componentDidMount = () => {
            this.setState({ updateShow: this.props.show })
        }
    
    handleUpdateShowChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const updateShow = { ...this.state.newShow };
        updateShow[attributeName] = attributeValue;

        this.setState({ updateShow })
    };

    updateShow = (evt) => {
        axios
            .put(`/api/shows/${this.props.showId}`, {
                name: this.state.updateShow.name,
                comedian: this.state.updateShow.comedian,
                date: this.state.updateShow.date,
                location: this.state.updateShow.location,
                tickets: this.state.updateShow.tickets
            }).then(() =>{
                this.props.handleUpdateShowForm()
            })
            
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateShow}>
                    <div>
                        <input
                            type='text'
                            name="name"
                            placeholder="Show Name"
                            value={this.state.updateShow.name}
                            onChange={this.handleUpdateShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="comedian"
                            placeholder="Comedian Name"
                            value={this.state.updateShow.comedian}
                            onChange={this.handleUpdateShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='date'
                            name="date"
                            placeholder="Show Date"
                            value={this.state.updateShow.date}
                            onChange={this.handleUpdateShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="location"
                            placeholder="Show Location"
                            value={this.state.updateShow.location}
                            onChange={this.handleUpdateShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="tickets"
                            placeholder="Ticket Link"
                            value={this.state.updateShow.tickets}
                            onChange={this.handleUpdateShowChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Update Show"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
