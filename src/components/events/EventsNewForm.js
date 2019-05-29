import React, { Component } from "react"

export default class EventsNewForm extends Component {

    state = {
        eventName: "",
        eventDate: "",
        eventLocation: ""
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventDate === "") {
          window.alert("Please select a date");
        } else {
          const event = {
            eventName: this.state.eventName,
            eventDate: this.state.eventDate,
            eventLocation: this.state.eventLocation
          };
    
          this.props
            .addEvent(event)
            .then(() => this.props.history.push("/events"));
        }
      };

    render() {
        return (
            <React.Fragment>
            <form className="EventsForm">
                <div className="form-group">
                <label htmlFor="EventName">Event Name</label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="eventName"
                placeholder="Event Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="EventDate">Event Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventDate"
              placeholder="Event Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="EventLocation">Event Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventLocation"
              placeholder="Event Location"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary">
            Submit
          </button>
          </form>
        </React.Fragment>
        )
    }
}