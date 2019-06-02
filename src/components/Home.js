import React, { Component } from "react"



export default class Home extends Component {
    state = {
        name: "",
        email: "",
        password: "",
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewUser = evt => {
        evt.preventDefault();
       
          const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          };
    
          this.props
          .addUser(newUser)
          .then(() => this.props.history.push("/login"));

      };

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
                <h1 className="">Register</h1>
                <label htmlFor="inputName">
                    Name:
                </label>
                <input onChange={this.handleFieldChange} type="text"
                        id="name"
                        placeholder=""
                        required="" 
                        autoFocus="" />
                        <br></br>
                <label htmlFor="inputEmail">
                    Email Address:
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
                onClick={this.constructNewUser}>
                    Create Account
                </button>
                <br></br>
                <p> Already have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/login")}>
                    Log In
                </button>
            </form>
        </React.Fragment>
        )
    }
}