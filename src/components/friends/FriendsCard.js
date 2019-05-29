import React, { Component } from "react"
import DbCalls from "../DbCalls"

export default class FriendsCard extends Component {


        render() {
        console.log("FriendsCard")
        console.log("users", this.props.friends)
        return this.props.friends.map(friend => (

            <div key={friend.id}> {friend.addedUser} Is a Friend</div>
        )

        )
    }
}




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