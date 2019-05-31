import React, { Component } from "react"


export default class TaskCard extends Component {
    render() {
        //Filter out any tasks that were marked as complete
        let noCompletes = this.props.tasks.filter(task => task.complete !== 1)
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
                        noCompletes.map(task =>
                            <div key={task.id}>
                                {/* On check of checkbox, capture the evt to get the ID and pass taskName and Complete Date as well */}
                                <input type="checkbox" id={task.id} onChange={(evt) => this.props.completeTask(evt.target.id, task.taskName, task.completeDate)}></input>
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