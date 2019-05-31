import React, { Component } from "react"
// import DbCalls from "../DbCalls"
import UserIcon from "./UserIcon.svg"

export default class FriendsResults extends Component {

    state = {
        name: ""
    }
    constructNewRel = (evt, user) => {
        evt.preventDefault();

        const newuser = {
            name: user
        }

        this.props.addFriend(newuser)
            .then(() => this.props.history.push("/friends"))
    }

    render() {
        console.log("hello", this.props.searchResults)
        if (!this.props.searchResults ) {
            return (
                null
            )
        } else if(this.props.searchResults.length === 0){
            return (
                <p>No Matches Found</p>
            )

        } else {

        return (
            <React.Fragment>
                <div>
                <h1>Results</h1>
                    <section className="AllResultsCards">
                        {
                            this.props.searchResults.map(user =>
                                <div key={user.id} className="ResultsCard">
                                    <img src={UserIcon} alt="User" className="FriendIcon"/>
                                    <br></br>
                                    {user.name}
                                    <br></br>
                                    <br></br>
                                    <button type="submit" 
                                    className="btn btn-success"
                                    onClick={(event) => this.constructNewRel(event, user.name)}>Add Friend</button>
                                    <br></br>



                                </div>


                            )
                        }
                    </section>
                </div>
            </React.Fragment>
        )
                    }
    }
}
