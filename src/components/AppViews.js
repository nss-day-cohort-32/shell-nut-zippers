import React, { Component } from "react"
import { Route } from 'react-router-dom'
import Login from "./login/LoginForm"
import DbCalls from "./DbCalls";


export default class AppViews extends Component {

    state = {
        login: [],
        news: [],
        events: [],
        tasks: [],
        forum: [],
        users: []
    };

    
    componentDidMount() {
        console.log("didmount");
        const newState = {}

        DbCalls.getAllUsers()
        .then(users => newState.users = users)
        

        .then(() => DbCalls.getAllNews())
        .then(news => newState.news = news)

        
        .then(() => DbCalls.getAllEvents())
        .then(events => newState.events = events)
        

        .then(() => DbCalls.getAllTasks())
        .then(tasks => newState.tasks = tasks)
        

        .then(() => DbCalls.getAllMessages())
        .then(messages => newState.messages = messages)


        .then(() => this.setState(newState))

    };
    
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment >
                <Route exact path = "/login"
                render = {(props) => {
                        if (!this.isAuthenticated()) {
                            return 
    
                        } 
                    }
                }/>
                <Route path = "/login"
                component = {Login}/>

            </React.Fragment>
        )
    }
}