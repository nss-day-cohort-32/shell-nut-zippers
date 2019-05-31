import React, { Component } from "react"
import "./News.css"
import NewsIcon from "./NewsIcon.svg"

export default class NewsCard extends Component {
    render() {
        return (
           <React.Fragment>

            <div className="NewsButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/news/new")}
                        }>
                    Post New Article
                </button>
            </div>

               <section className="NewsCard">
                   {
                       this.props.news.map(news =>
                        <div key={news.id} className="NewsBorderCard">
                            <img src={NewsIcon} alt="News" className="NewsIcon"/>
                            {news.newsTitle}
                            <br></br>
                            {news.newsSynopsis}
                            <br></br>
                            {news.newsUrl}
                            <br></br>
                        <button
                            type="button"
                            className="btn btn-success EditNewsBtn"
                            onClick={() => {
                                    this.props.history.push(`/news/${news.id}/edit`);
                            }}>
                            Edit</button>
                        <button className="btn btn-primary DeleteNewsBtn"
                                onClick={() => this.props.deleteNews(news.id)}
                                >Delete</button>
                        </div>
                       )
                   }
               </section>
           </React.Fragment>
        )
    }
}