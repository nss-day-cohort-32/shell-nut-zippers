import React, { Component } from "react"
// import DbCalls from "../DbCalls"

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
                <p>Please Enter Name</p>
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
                    <section>
                        {
                            this.props.searchResults.map(user =>
                                <div key={user.id}>
                                    {user.name}
                                    <button type="submit" onClick={(event) => this.constructNewRel(event, user.name)}>Add Friend</button>



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
