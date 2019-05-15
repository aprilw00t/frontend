import React from "react";
import axios from "axios";
import DisplayArticleByTopicFunction from "./displayArticlesByTopicFunction";
import Sort from "../../layerTwo/displayAllArticles/sort_by";
class DisplayArticlesByTopic extends React.Component {
  state = { ArticlesByTopic: null, sortBy: "created_at" };

  render() {
    return (
      <div>
        article by topic
        {this.state.ArticlesByTopic && (
          <div>
            <Sort articleSort={this.sortState} />
            <DisplayArticleByTopicFunction
              articles={this.state.ArticlesByTopic}
            />
          </div>
        )}
      </div>
    );
  }
  sortState = click => {
    this.setState({ sortBy: click });
  };
  componentDidMount() {
    axios
      .get(
        `https://n-c-news-api.herokuapp.com/api/articles?topic=${
          this.props.topic
        }&sort_by=${this.state.sortBy}`
      )
      .then(({ data }) => {
        this.setState({ ArticlesByTopic: data });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.sortBy !== prevState.sortBy) {
      console.log("uisfdhfi");
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles?topic=${
            this.props.topic
          }&sort_by=${this.state.sortBy}`
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
          }&sort_by=${this.state.sortBy}`
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
