import React from "react";
import "../../../App.css";
import axios from "axios";
import DisplayArticleByTopicFunction from "./displayArticlesByTopicFunction";
//import Sort from "../../layerTwo/displayAllArticles/sort_by";
class DisplayArticlesByTopic extends React.Component {
  state = { ArticlesByTopic: null };

  render() {
    return (
      <div class="marginboxes">
        {this.state.ArticlesByTopic && (
          <div>
            <DisplayArticleByTopicFunction
              articles={this.state.ArticlesByTopic}
            />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://n-c-news-api.herokuapp.com/api/articles?topic=${
          this.props.topic
        }&sort_by=${this.props.sortBy}`
      )
      .then(({ data }) => {
        this.setState({ ArticlesByTopic: data });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.sortBy !== prevState.sortBy) {
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles?topic=${
            this.props.topic
          }&sort_by=${this.props.sortBy}`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
    if (this.props !== prevProps) {
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles?topic=${
            this.props.topic
          }&sort_by=${this.props.sortBy}`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
  }
}

// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default DisplayArticlesByTopic;
