import React, { Component } from "react"
import "./Forum.css"
import UserIcon from "./UserIcon.svg"

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
                            <img src={UserIcon} alt="User" className="ForumIcon"/>
                            <p className="ForumUser"> * {forum.userPosted}</p>
                            <hr></hr>
                            {forum.message}
                            <hr></hr>
                        <button
                            type="button"
                            className="btn btn-success ForumHistoryBtn"
                            onClick={() => {
                                    this.props.history.push(`/forum/${forum.id}/edit`);
                            }}>
                            Edit</button>
                            <button className="btn btn-primary ForumHistoryBtn"
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