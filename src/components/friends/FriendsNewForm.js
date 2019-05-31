import React, { Component } from "react"
import DbCalls from "../DbCalls"
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
    // searchResults: results
  }

  grabInputText(evt) {
    console.log(evt.target.value)
    this.setState({text:evt.target.value})
  }

  searchInput() {
    console.log(this.state.text)
    console.log(this.props.users)
    DbCalls.SearchUsers(this.state.text)
    .then(results => console.log(results))
  }

  render() {
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
          <br />
        </div>
      </React.Fragment>
    );
  }
}