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

    handleLogin = (e) => {
        e.preventDefault()

    
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}
            className="LoginForm">
                <h1 className="NutshellTitle">Welcome to Nutshell!</h1>
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
                    >
                    Sign In
                </button>
            </form>
        )
    }
}