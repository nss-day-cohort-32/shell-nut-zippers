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
              <p> We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. In your world you have total and absolute power. Zip. That easy. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. These trees are so much fun. I get started on them and I have a hard time stopping. Let's do that again. Isn't that fantastic?
              What the devil. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. We'll put a happy little bush here. Let's put a touch more of the magic here. You can spend all day playing with mountains. This is unplanned it really just happens.</p>
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