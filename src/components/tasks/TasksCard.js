import React, { Component } from "react"


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
                            <div key={task.id}>
                                {task.taskName}
                                <br></br>
                                {"Complete By: "}
                                {task.completeDate}
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
                                {/*
                                <button
                                    onClick={() => this.onCheckboxBtnClick()}
                                    active={this.props.hideTasks(task.id)}>Completed</button> */}

                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}