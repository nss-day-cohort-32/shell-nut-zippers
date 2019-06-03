import React, { Component } from "react"
import DbCalls from "../DbCalls"
import "./Forum.css"

export default class ForumEditForm extends Component {
    state = {
      userPosted: "",
      message: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingMessage = evt => {
        evt.preventDefault()
        
          
          const editedMessage = {
            username: sessionStorage.getItem("credentials"),
            id: this.props.match.params.forumId,
            userPosted: this.state.userPosted,
            message: this.state.message,

          };
  
      this.props.putMessages(editedMessage)
      .then(() => this.props.history.push("/forum"))      
    
    }
  

    componentDidMount() {
      DbCalls.getMessage(this.props.match.params.forumId)
      .then(forum => {
        this.setState({
          userPosted: forum.userPosted,
          message: forum.message,
        });
      });
    };

    render() {
        return(
            <React.Fragment>
                <br></br>
                <form className="ForumEditForm">
                {/* <div className="form-group">
                <label htmlFor="userPosted">User</label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="userPosted"
                value = {this.state.userPosted}
            />
          </div> */}
          <div className="MessageEdit">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message"
              value = {this.state.message}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingMessage}
            className="btn btn-primary ForumEditButton">
            Save Changes
          </button>
          </form>
            </React.Fragment>
        )
    }
};


