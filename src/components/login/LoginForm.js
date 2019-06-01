import React, { Component } from "react"
import "./Login.css"


export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    

    handleLogin = (evt) => {
        console.log(this.props.users)
        let allUsers = this.props.users
        let inputEmail = this.state.email
        let matchUser = allUsers.find(user => user.email === inputEmail)
        console.log(this.state.email)
        // console.log("matchUsers", matchUser.id)
        evt.preventDefault();
        if (this.state.email === ""){
            window.alert("Please sign in");
        } else if(!matchUser){
            window.alert("Email not found")
          } else {
        sessionStorage.setItem(
            "credentials",
            matchUser.name
            )
        } if (matchUser) {
            this.props.history.push("/forum");
            window.alert(`Welcome back ${matchUser.name}!`)
        }
    }


    render() {
        return (
            <form
            className="LoginForm">
                <h1 className="Welcome">Welcome</h1>
                <label htmlFor="inputEmail">
                    Email address:
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder=""
                       required="" autoFocus="" />
                       <br></br>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder=""
                       required="" />
                       <br></br>
                <button type="submit"
                className="btn btn-primary LoginSubmit"
                onClick={this.handleLogin}>
                    Sign In
                </button>
            </form>
        )
    }
}