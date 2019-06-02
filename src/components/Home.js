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

      };

    render() {
        return (
            <React.Fragment>
            <form className="EventsForm">
            <div className="form-group">
                <label htmlFor="EventName">Name</label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                placeholder=""
            />
          </div>
                <div className="form-group">
                <label htmlFor="EventName">Email</label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="EventDate">Password</label>
            <input
              type="password"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="password"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewUser}
            className="btn btn-primary">
            Create Account
          </button>
          </form>
        </React.Fragment>
        )
    }
}