import React, { Component } from "react"
import DbCalls from "../DbCalls"
import "./Tasks.css"

export default class TasksEditForm extends Component {
    state = {
        taskName: "",
        completeDate: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTask = evt => {
        evt.preventDefault()
        if (this.state.completeDate === "") {
            window.alert("Please select a date");
        } else {
            const editedTask = {
                id: this.props.match.params.taskId,
                taskName: this.state.taskName,
                completeDate: this.state.completeDate,
                userId: parseInt(sessionStorage.getItem("credentials")),
                complete: 0
            };

            this.props.putTask(editedTask)
                .then(() => this.props.history.push("/tasks"))
        }
    }

    componentDidMount() {
        DbCalls.getTasks(this.props.match.params.taskId)
            .then(task => {
                this.setState({
                    taskName: task.taskName,
                    completeDate: task.completeDate
                });
            });
    };

    render() {
        return (
            <React.Fragment>
                <form className="TasksForm" onSubmit={this.updateExistingTask}>
                    <div className="form-group">
                        <label htmlFor="taskName">Task Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="taskName"
                            value={this.state.taskName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="completeDate">Complete Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="completeDate"
                            value={this.state.completeDate}
                        />
                    </div>
                    <button
                        type="submit"
                        // onClick={this.updateExistingTask}
                        className="btn btn-primary"
                    >
                        Submit
                        </button>
                </form>
            </React.Fragment>
        )
    }
};