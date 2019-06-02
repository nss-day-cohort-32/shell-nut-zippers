import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import Login from "./login/LoginForm"
import FriendsCard from "./friends/FriendsCard"
import FriendsNewForm from "./friends/FriendsNewForm"
import FriendsResults from "./friends/FriendsResults"
import DbCalls from "./DbCalls";
import EventsCard from "./events/EventsCard"
import EventsNewForm from "./events/EventsNewForm"
import EventsEditForm from "./events/EventsEditForm"
import NewsCard from "./news/NewsCard"
import TasksCard from "./tasks/TasksCard"
import TasksNewForm from "./tasks/TasksNewForm"
import TasksEditForm from "./tasks/TasksEditForm"
import NewNewsForm from "./news/NewsNewForm"
import NewsEditForm from "./news/NewsEditForm"
import ForumCard from "./forum/ForumCard"
import ForumEditForm from "./forum/ForumEditForm"
import ForumNewForm from "./forum/ForumNewForm"



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

    searchResults = (names) =>
        DbCalls.SearchUsers(names)
            .then(() => DbCalls.getAllUsers())
            .then(names =>
                this.setState({
                    names: names
                })
            )

    addEvent = (event) =>
        DbCalls.postNewEvents(event)
            .then(() => DbCalls.getAllEvents())
            .then(events =>
                this.setState({
                    events: events
                })
            );

    addFriend = (friend) =>
        DbCalls.addNewFriend(friend)
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
            .then(events => { newState.events = events })
            .then(() => this.setState(newState))
    };

    deleteFriend = (id) => {
        const newState = {};
        DbCalls.deleteFriends(id)
            .then(DbCalls.getAllFriends)
            .then(friends => { newState.friends = friends })
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

    putTask = (editedTasks) => {
        return DbCalls.putTask(editedTasks)
            .then(() => DbCalls.getAllTasks())
            .then(tasks => {
                this.setState({
                    tasks: tasks
                })
            });
    };

    completeTask = (taskId, taskName, completeDate) => {
        return DbCalls.completeTask(taskId, taskName, completeDate)
            .then(() => DbCalls.getAllTasks())
            .then(tasks => {
                this.setState({
                    tasks: tasks
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
            .then(news => { newState.news = news })
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

    addMessage = (forum) =>
        DbCalls.postNewMessages(forum)
            .then(() => DbCalls.getAllMessages())
            .then(forum =>
                this.setState({
                    forum: forum
                })
            );

    deleteMessages = (id) => {
        const newState = {};
        DbCalls.deleteMessages(id)
            .then(DbCalls.getAllMessages)
            .then(forum => { newState.forum = forum })
            .then(() => this.setState(newState))
    };

    putMessages = (editedForumObject) => {
        return DbCalls.putMessages(editedForumObject)
            .then(() => DbCalls.getAllMessages())
            .then(forum => {
                this.setState({
                    forum: forum
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

            .then(() => DbCalls.getAllMessages())
            .then(forum => newState.forum = forum)


            .then(() => DbCalls.getAllTasks())
            .then(tasks => newState.tasks = tasks)


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

                <Route exact path="/login"
                    render={(props) => {
                        return <Login {
                            ...props
                        }
                            users={this.state.users} />
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
                                deleteTasks={this.deleteTasks}
                                completeTask={this.completeTask} />
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
                            addTask={this.addTask} />
                    }
                    } />
                <Route path="/tasks/:taskId(\d+)/edit"
                    render={props => {
                        return <TasksEditForm {
                            ...props
                        }
                            tasks={this.state.tasks}
                            putTask={this.putTask} />
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
                <Route path="/news/new"
                    render={(props) => {
                        return <NewNewsForm {
                            ...props
                        }
                            News={this.state.news}
                            addNews={this.addNews} />
                    }
                    } />
                <Route path="/news/:newsId(\d+)/edit"
                    render={props => {
                        return <NewsEditForm {
                            ...props
                        }
                            news={this.state.news}
                            putNews={this.putNews} />
                    }
                    } />
                <Route exact path="/forum"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ForumCard {
                                ...props
                            }
                                forum={this.state.forum}
                                deleteMessages={this.deleteMessages} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }
                    } />
                <Route path="/forum"
                    render={(props) => {
                        return <ForumNewForm {
                            ...props
                        }
                            forum={this.state.forum}
                            addMessage={this.addMessage} />
                    }
                    } />
                <Route path="/forum/:forumId(\d+)/edit"
                    render={props => {
                        return <ForumEditForm {
                            ...props
                        }
                            forum={this.state.forum}
                            putMessages={this.putMessages} />
                    }
                    } />





                <Route exact path="/friends"
                    render={(props) => {
                        return <FriendsCard friends={this.state.friends} deleteFriend={this.deleteFriend} {
                            ...props
                        } />;
                    }
                    } />

                <Route path="/friends/search"
                    render={(props) => {
                        return <FriendsNewForm {...props}
                            users={this.state.users}
                            addFriend={this.addFriend}
                            searchResults={this.searchResults}
                        />

                    }
                    } />


            </React.Fragment>
        )
    }
}