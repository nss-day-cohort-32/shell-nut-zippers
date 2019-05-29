import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import Login from "./login/LoginForm"
import DbCalls from "./DbCalls";
import EventsCard from "./events/EventsCard"
import EventsNewForm from "./events/EventsNewForm"
import EventsEditForm from "./events/EventsEditForm"
import NewsCard from "./news/NewsCard"
import TasksCard from "./tasks/TasksCard"
import TasksNewForm from "./tasks/TasksNewForm"
import TasksEditForm from "./tasks/TasksEditForm"


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
            .then(events => { newState.events = events })
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
    addTask = (task) =>
        DbCalls.postNewTasks(task)
            .then(() => DbCalls.getAllTasks())
            .then(tasks =>
                this.setState({
                    tasks: tasks
                })
            );

    deleteTasks = (id) => {
        const newState = {};
        DbCalls.deleteTasks(id)
            .then(DbCalls.getAllTasks)
            .then(tasks => { newState.tasks = tasks })
            .then(() => this.setState(newState))
    };

    putTasks = (editedTasks) => {
        return DbCalls.putTasks(editedTasks)
            .then(() => DbCalls.getAllTasks())
            .then(tasks => {
                this.setState({
                    tasks: tasks
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
                <Route exact path="/login"
                    render={(props) => {
                        if (!this.isAuthenticated()) {
                            return

                        }
                    }
                    } />
                <Route exact path="/events"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <EventsCard {
                                ...props
                            }
                                events={this.state.events}
                                deleteEvents={this.deleteEvents} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }
                    } />
                <Route path="/events/new"
                    render={(props) => {
                        return <EventsNewForm {
                            ...props
                        }
                            events={this.state.events}
                            addEvent={this.addEvent} />
                    }
                    } />
                <Route path="/events/:eventId(\d+)/edit"
                    render={props => {
                        return <EventsEditForm {
                            ...props
                        }
                            events={this.state.events}
                            putEvents={this.putEvents} />
                    }
                    } />
                <Route exact path="/tasks"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TasksCard {
                                ...props
                            }
                                tasks={this.state.tasks}
                                deleteTasks={this.deleteTasks} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }
                    } />
                <Route path="/tasks/new"
                    render={(props) => {
                        return <TasksNewForm {
                            ...props
                        }
                            tasks={this.state.tasks}
                            addTasks={this.addTasks} />
                    }
                    } />
                <Route path="/tasks/:taskId(\d+)/edit"
                    render={props => {
                        return <TasksEditForm {
                            ...props
                        }
                            tasks={this.state.tasks}
                            putTasks={this.putTasks} />
                    }
                    } />
                <Route exact path="/news"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <NewsCard {
                                ...props
                            }
                                news={this.state.news}
                                deleteNews={this.deleteNews} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }
                    } />


                <Route path="/login"
                    component={Login} />

            </React.Fragment>
        )
    }
}