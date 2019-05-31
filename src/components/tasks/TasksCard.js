import React, { Component } from "react"
import "./Tasks.css"
import TasksIcon from "./TasksIcon.svg"


export default class TaskCard extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="TaskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }>
                        Create New Task
                </button>
                </div>

                <section className="TaskCard">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="TasksBorderCard">
                                <img src={TasksIcon} alt="Task" className="TasksIcon"/>
                                <br></br>
                                {task.taskName}
                                <br></br>
                                {task.completeDate}
                                <br></br>
                                <br></br>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.props.history.push(`/tasks/${task.id}/edit`);
                                    }}>
                                    Edit</button>

                                <button className="btn btn-primary"
                                    onClick={() => this.props.deleteTasks(task.id)}
                                >Delete</button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}