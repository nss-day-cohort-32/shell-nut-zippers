import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import Login from "./login/LoginForm"
import DbCalls from "./DbCalls";
import EventsCard from "./events/EventsCard"
import EventsNewForm from "./events/EventsNewForm"
import EventsEditForm from "./events/EventsEditForm"


export default class AppViews extends Component {

    state = {
        login: [],
        news: [],
        events: [],
        tasks: [],
        forum: [],
        users: []
    };

    addEvent = (event) =>
        DbCalls.postNewEvents(event)
        .then(() => DbCalls.getAllEvents())
        .then(events =>
            this.setState({
            events: events
        })
    );

    deleteEvents = (id) => {
        const newState = {};
        DbCalls.deleteEvents(id)
        .then(DbCalls.getAllEvents)
        .then(events => 
            {newState.events = events})
        .then(() => this.setState(newState))
    };

    putEvents = (editedEventObject) => {
        return DbCalls.putEvents(editedEventObject)
            .then(() => DbCalls.getAllEvents())
            .then(events => {
                this.setState({
                    events: events
                })
            });
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
                <Route exact path = "/events"
                render = {(props) => {
                        if (this.isAuthenticated()) {
                            return <EventsCard {
                                ...props
                            }
                            events = {this.state.events}
                            deleteEvents = {this.deleteEvents}/>
                        } else {
                            return <Redirect to = "/login" />
                        }
                    }
                }/>
                <Route path = "/events/new"
                render = {(props) => {
                        return <EventsNewForm {
                            ...props
                        }
                        events = {this.state.events}
                        addEvent = {this.addEvent}/>
                    }
                }/>
                <Route path = "/events/:eventId(\d+)/edit"
                render = {props => {
                        return <EventsEditForm {
                            ...props
                        }
                        events = {this.state.events}
                        putEvents = {this.putEvents}/>
                    }
                }/> 


                <Route path = "/login"
                component = {Login}/>

            </React.Fragment>
        )
    }
}