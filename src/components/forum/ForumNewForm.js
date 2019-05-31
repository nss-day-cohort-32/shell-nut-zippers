import React, { Component } from "react"
import "./Forum.css"

export default class ForumNewForm extends Component {

    state = {
        userPosted: "",
        message: "",
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.userPosted === "") {
          window.alert("Don't forget to define the user!");
        } else {
          const forum = {
            userPosted: this.state.userPosted,
            message: this.state.message,
          };
    
          this.props
            .addMessage(forum)
            .then(() => this.setState({userPosted: ""}))
        }
      };


    render() {
        return (
            <React.Fragment>
              <footer className="ForumFooter">
            <form className="NewForumForm">
                <div className="form-group">
                <label htmlFor="userPosted"> User </label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="userPosted"
                placeholder=""
                value={this.state.userPosted}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewMessage}
            className="btn btn-primary">
            Send
          </button>
          </form>
          </footer>
        </React.Fragment>
        )
    }
}