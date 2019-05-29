import React, { Component } from "react"


export default class EventsCard extends Component {
    render() {
        return (
           <React.Fragment>

            <div className="EventsButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/events/new")}
                        }>
                    Create New Event
                </button>
            </div>

               <section className="EventsCard">
                   {
                       this.props.events.map(event =>
                        <div key={event.id}>
                            {event.eventName}
                            {" "}
                            {event.eventDate}
                            {" "}
                            {event.eventLocation}

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                    this.props.history.push(`/events/${event.id}/edit`);
                            }}>
                            Edit</button>

                        <button className="btn btn-primary"
                                onClick={() => this.props.deleteEvents(event.id)}
                                >Delete</button>
                        </div>
                       )
                   }
               </section>
           </React.Fragment>
        )
    }
}