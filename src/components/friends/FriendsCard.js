import React, { Component } from "react"
import DbCalls from "../DbCalls"
import "./Friends.css"
import UserIcon from "./UserIcon.svg"


export default class FriendsCard extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="FriendsButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/friends/search")
                        }
                        }>
                        Add New Friend
                </button>
                </div>

                <section className="FriendsCard">
                    {
                        this.props.friends.map(friend =>
                            <div key={friend.id} className="FriendsBorderCard"> 
                            <img src={UserIcon} alt="User" className="FriendIcon"/>
                                <br></br>
                                {friend.addedUser}
                            <div key={friend.id}>
                                {friend.name}
                                <br></br>
                                <br></br>
                                <button className="btn btn-primary"
                                    onClick={() => this.props.deleteFriend(friend.id)}
                                >Delete Friend</button>
                            </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}


//make button route to friendsnewform using history.push method

//        return (
//           <React.Fragment>
//               <section className="EventsCard">
//                   {
//                       this.props.events.map(event =>
//                        <div key={event.id}>
//                            {event.eventName}
//                            {" "}
//                            {event.eventDate}
//                        </div>
//                       )
//                   }
//               </section>
//           </React.Fragment>
//        )
//    }
// }

// render() {

//     console.log("users", this.props.friends)
//     return this.props.friends.map(friend => (

//         <div key={friend.id}> {friend.addedUser} Is a Friend</div>
//     )

//     )
// }