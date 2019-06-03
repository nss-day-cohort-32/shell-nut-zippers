import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import NutLogo from "./NutLogo.svg"


export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/forum">Forum</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={()=> sessionStorage.clear()}>Logout</Link>
                    </li>
                </ul>
                <h1 className="navTitle"> Nutshell </h1>
                <Route render={({ history}) => (
                   <img src={NutLogo} alt="Nutshell" className="NutLogo" onClick={()=> history.push("/")}></img>
                   )} />
            </nav>
        )
    }
}

