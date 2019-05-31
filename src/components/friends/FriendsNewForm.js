import React, { Component } from "react"
import DbCalls from "../DbCalls"
import FriendsResults from "./FriendsResults"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class FriendsNewForm extends Component {

  state = {
    text: "Hello Brian",
    // searchResults: []
  }

  grabInputText(evt) {
    console.log(evt.target.value)
    this.setState({text:evt.target.value})
  }

  searchInput() {
    console.log(this.state.text)
    console.log(this.props.users)
    DbCalls.SearchUsers(this.state.text)
    .then(results => this.setState({
      searchResults: results
    }))
  }

  render() {
    // console.log("searchResultsState", this.state.searchResults)
    return (
      <React.Fragment>
        <div>

          <section className="UsersCard">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button className="SearchUsers"
                      onClick={() => this.searchInput()}>Search Users</Button></InputGroupAddon>
                    <Input onKeyUp={evt => this.grabInputText(evt)} />
                  </InputGroup>
          </section>

          <FriendsResults {...this.props} searchResults={this.state.searchResults} addFriend={this.props.addFriend} />

          <br />
        </div>
      </React.Fragment>
    );
  }
}
{/* <Route path="/friends/search"
render={(props) => {
    return <FriendsResults {
        ...props
    }
        users={this.state.users}
        addFriend={this.addFriend}
        // searchResults={this.searchResults}
         />

}
} /> */}
