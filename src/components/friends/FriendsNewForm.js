import React, { Component } from "react"
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
    constructor(props) {
      super(props);

      this.toggleDropDown = this.toggleDropDown.bind(this);
      this.toggleSplit = this.toggleSplit.bind(this);
      this.state = {
        dropdownOpen: false,
        splitButtonOpen: false
      };
    }

    toggleDropDown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }

    render() {
      return (
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend"><Button>Search Users</Button></InputGroupAddon>
            <Input />
          </InputGroup>
          <br />
        </div>
      );
    }
  }