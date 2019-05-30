import React, { Component } from "react"

export default class TasksNewForm extends Component {

    state = {
        taskName: "",
        completeDate: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskDate === "") {
            window.alert("Please select a date");
        } else {
            const task = {
                complete: 0,
                taskName: this.state.taskName,
                completeDate: this.state.completeDate
            };

            this.props
                .addTask(task)
                .then(() => this.props.history.push("/tasks"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="TasksForm">
                    <div className="form-group">
                        <label htmlFor="TaskName">Task Name</label>
                        <input type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="taskName"
                            placeholder="To Do"
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
                            placeholder="Complete By Date"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewTask}
                        className="btn btn-primary">
                        Submit
          </button>
                </form>
            </React.Fragment>
        )
    }
}