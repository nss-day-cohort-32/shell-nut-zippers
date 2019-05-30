import React, { Component } from "react"

export default class FriendsResults extends Component {

    state = {
        name: ""
    }
    constructNewRel = evt => {
        evt.preventDefault();

        const user = {
            name: this.state.name
        }

        this.props.addFriend(user)
            .then(() => this.props.history.push("/friends"))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <section>
                        {
                            this.props.users.map(user =>
                                <div key={user.id}>
                                    {user.name}
                                    <button type="submit" onClick={this.constructNewRel}>Add Friend</button>



                                </div>
                            )
                        }
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
