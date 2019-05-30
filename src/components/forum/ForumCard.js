import React, { Component } from "react"
import "./Forum.css"


export default class EventsCard extends Component {
    render() {
        return (
           <React.Fragment>
               <div className="ForumTitle">
                </div>
                
               <section className="ForumCard">
                   {
                       this.props.forum.map(forum =>
                        <div key={forum.id} className="ForumHistory">
                            <p className="ForumUser">{forum.userPosted}</p>
                            <br></br>
                            {forum.message}
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                    this.props.history.push(`/forum/${forum.id}/edit`);
                            }}>
                            Edit</button>
                            <button className="btn btn-primary"
                                onClick={() => this.props.deleteMessages(forum.id)}
                                >Delete</button>
                        </div>
                       )
                   }
               </section>
           </React.Fragment>
        )
    }
}