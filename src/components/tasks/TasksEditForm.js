import React, { Component } from "react"
import DbCalls from "../DbCalls"

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

    updateExistingEvent = evt => {
        evt.preventDefault()
        if (this.state.completeDate === "") {
            window.alert("Please select a date");
        } else {
            const editedTask = {
                id: this.props.match.params.taskId,
                taskName: this.state.taskName,
                completeDate: this.state.completeDate
            };

            this.props.putTasks(editedTask)
                .then(() => this.props.history.push("/tasks"))
        }
    }

    componentDidMount() {
        DbCalls.getTasks(this.props.match.params.eventId)
            .then(event => {
                this.setState({
                    taskName: tasks.taskName,
                    completeDate: tasks.completeDate
                });
            });
    };

    render() {
        return (
            <React.Fragment>
                <form className="TaskForm">
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
                        onClick={this.updateExistingTask}
                        className="btn btn-primary"
                    >
                        Submit
                        </button>
                </form>
            </React.Fragment>
        )
    }
};