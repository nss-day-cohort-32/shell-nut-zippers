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
        if (this.state.message === "") {
          window.alert("Don't forget to include a message!");
        } else {
          const forum = {
            username: sessionStorage.getItem("credentials"),
            message: this.state.message,
            id: this.props.match.params.forumId,
            userPosted: this.state.userPosted,
          };
    
          this.props
            .addMessage(forum)
            .then(() => this.setState({message: ""}))
        }
      };


    render() {
        return (
            <React.Fragment>
            <form className="NewForumForm">
                {/* <div className="form-group">
                <label htmlFor="userPosted"> User </label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="userPosted"
                placeholder=""
                // value={this.state.userPosted}
            />
          </div> */}
          <div className="form-group">
          <label htmlFor="NewMessage">
                    Message:
                </label>
                <br></br>
            <input
              type="text"
              size="30"
              required
              className="ForumMessageField"
              onChange={this.handleFieldChange}
              id="message"
              placeholder=""
              value={this.state.message}
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewMessage}
            className="btn btn-primary">
            Send
          </button>
          </form>
        </React.Fragment>
        )
    }
}