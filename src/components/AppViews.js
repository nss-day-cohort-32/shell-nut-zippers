import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import Login from "./login/LoginForm"
import FriendsCard from "./friends/FriendsCard"
import FriendsNewForm from "./friends/FriendsNewForm"
import DbCalls from "./DbCalls";
import EventsCard from "./events/EventsCard"
import EventsNewForm from "./events/EventsNewForm"
import EventsEditForm from "./events/EventsEditForm"
import NewsCard from "./news/NewsCard"
import NewNewsForm from "./news/NewsNewForm"
import NewsEditForm from "./news/NewsEditForm"



export default class AppViews extends Component {

    state = {
        login: [],
        news: [],
        events: [],
        tasks: [],
        forum: [],
        users: [],
        friends: []
    };

    addEvent = (event) =>
        DbCalls.postNewEvents(event)
        .then(() => DbCalls.getAllEvents())
        .then(events =>
            this.setState({
            events: events
        })
    );

    addFriend = (friend) =>
        DbCalls.postNewFriends(friend)
        .then(() => DbCalls.getAllFriends())
        .then(friends =>
            this.setState({
                friends: friends
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

    deleteFriend = (id) => {
        const newState = {};
        DbCalls.deleteFriends(id)
        .then(DbCalls.getAllFriends)
        .then(friends =>
            {newState.friends = friends})
        .then(() => this.setState(newState))
    }

    putEvents = (editedEventObject) => {
        return DbCalls.putEvents(editedEventObject)
            .then(() => DbCalls.getAllEvents())
            .then(events => {
                this.setState({
                    events: events
                })
            });
    };
 
    addNews = (news) =>
    DbCalls.postNewNews(news)
    .then(() => DbCalls.getAllNews())
    .then(news =>
        this.setState({
        news: news
    })
);

deleteNews = (id) => {
    const newState = {};
    DbCalls.deleteNews(id)
    .then(DbCalls.getAllNews)
    .then(news => 
        {newState.news = news})
    .then(() => this.setState(newState))
};

putNews = (editedNewsObject) => {
    return DbCalls.putNews(editedNewsObject)
        .then(() => DbCalls.getAllNews())
        .then(news => {
            this.setState({
                news: news
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

        .then(() => DbCalls.getAllFriends())
        .then(friends => newState.friends = friends)


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
                <Route exact path = "/news"
                render = {(props) => {
                        if (this.isAuthenticated()) {
                            return <NewsCard {
                                ...props
                            }
                            news = {this.state.news}
                            deleteNews = {this.deleteNews}/>
                        } else {
                            return <Redirect to = "/login" />
                        }
                    }
                }/>
                <Route path = "/news/new"
                render = {(props) => {
                        return <NewNewsForm {
                            ...props
                        }
                        News = {this.state.news}
                        addNews = {this.addNews}/>
                    }
                }/>
                <Route path = "/news/:newsId(\d+)/edit"
                render = {props => {
                        return <NewsEditForm {
                            ...props
                        }
                        news = {this.state.news}
                        putNews = {this.putNews}/>
                    }
                }/>



                <Route path = "/login"
                component = {Login}/>

                <Route exact path = "/friends"
                render = {(props) => {
                    return <FriendsCard friends = {this.state.friends} {
                        ...props
                    } />;
                }
                }/>

                <Route path = "/friends/search"
                render = {(props) => {
                    return <FriendsNewForm {
                    ...props
                    }
                        friends = {this.state.friends}
                        addFriend = {this.state.addFriend}/>

                    }
                }/>

            </React.Fragment>
        )
    }
}