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
        let inputPassword = this.state.password
        let matchUser = allUsers.find(user => user.email === inputEmail && user.password === inputPassword)
        console.log(this.state.email)
        // console.log("matchUsers", matchUser.id)
        evt.preventDefault();
        if (this.state.email | this.state.password === ""){
            window.alert("Please sign in");
        }
        else if(!matchUser){
            window.alert("User not found");
          } else {
        sessionStorage.setItem(
            "credentials",
            matchUser.name,
            )
        } if(matchUser) {
            this.props.history.push("/forum");
            window.alert(`Welcome back ${matchUser.name}!`)
        }
    }


    render() {
        return (
            <React.Fragment>
            <div className="RegisterWelcome">
              <h1> Welcome to Nutshell! </h1>
              <br></br>
              <p>This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Everyone is going to see things differently - and that's the way it should be. We'll throw some old gray clouds in here just sneaking around and having fun. We don't want to set these clouds on fire.</p>
              </div>
            <form
            className="LoginForm">
                <h1 className="">Login</h1>
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
                    Login
                </button>
                <br></br>
                <p> Don't have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/")}>
                    Register
                </button>
            </form>
            </React.Fragment>
        )
    }
}