import React, { Component } from "react"
import DbCalls from "../DbCalls"

export default class FriendsCard extends Component {


        render() {
        console.log("FriendsCard")
        console.log("users", this.props.users)
        return this.props.users.map(user => (

            <div key={user.id}>Hello {user.name}</div>
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