import React, { Component } from "react"
import DbCalls from "../DbCalls"

export default class EventsEditForm extends Component {
    state = {
      eventName: "",
      eventDate: "",
      eventLocation: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()
      if (this.state.eventDate === "") {
        window.alert("Please select a date");
      } else {
        const editedEvent = {
          id: this.props.match.params.eventId,
          eventName: this.state.eventName,
          eventDate: this.state.eventDate,
          eventLocation: this.state.eventLocation
        };

    this.props.putEvents(editedEvent)
    .then(() => this.props.history.push("/events"))      
    }
  }

    componentDidMount() {
      DbCalls.getEvent(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventLocation: event.eventLocation
        });
      });
    };

    render() {
        return(
            <React.Fragment>
                <form className="EventsForm">
                <div className="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="eventName"
                        value = {this.state.eventName}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        type="date"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="eventDate"
                        value = {this.state.eventDate}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="eventLocation">Event Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="eventLocation"
                            value = {this.state.eventLocation}
                        />
                        </div>
                        <button
                        type="submit"
                        onClick={this.updateExistingEvent}
                        className="btn btn-primary"
                        >
                        Save Edit
                        </button>
                    </form>
            </React.Fragment>
        )
    }
};


