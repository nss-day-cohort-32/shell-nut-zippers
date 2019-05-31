import React, { Component } from "react"
import DbCalls from "../DbCalls"
import "./News.css"

export default class EventsEditForm extends Component {
    state = {
        newsTitle: "",
        newsSynopsis: "",
        newsUrl: ""
      }
    
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingNews = evt => {
      evt.preventDefault()
      if (this.state.newsSynopsis === "") {
        window.alert("Enter Synopsis");
      } else {
        const editedNews = {
          id: this.props.match.params.newsId,
          newsTitle: this.state.newsTitle,
          newsSynopsis: this.state.newsSynopsis,
          newsUrl: this.state.newsUrl
        };

    this.props.putNews(editedNews)
    .then(() => this.props.history.push("/news"))      
    }
  }

    componentDidMount() {
      DbCalls.getNews(this.props.match.params.newsId)
      .then(news => {
        this.setState({
          newsTitle: news.newsTitle,
          newsSynopsis: news.newsSynopsis,
          newsUrl: news.newsUrl
        });
      });
    };

    render() {
        return(
            <React.Fragment>
                <form className="NewsForm">
                <div className="form-group">
                    <label htmlFor="News Title">News Title</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="newsTitle"
                        value = {this.state.newsTitle}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="newsSynopsis">Synopsis</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="newsSynopsis"
                        value = {this.state.newsSynopsis}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="newsUrl">News Url</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="newsUrl"
                            value = {this.state.newsUrl}
                        />
                        </div>
                        <button
                        type="submit"
                        onClick={this.updateExistingNews}
                        className="btn btn-primary"
                        >
                        Submit
                        </button>
                    </form>
            </React.Fragment>
        )
    }
}
