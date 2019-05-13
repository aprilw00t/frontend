import React from "react";
import axios from "axios";
import DisplayArticleByTopicFunction from "./displayArticlesByTopicFunction";
class DisplayArticlesByTopic extends React.Component {
  state = { ArticlesByTopic: null };

  render() {
    return (
      <div>
        article by topic
        {this.state.ArticlesByTopic && (
          <DisplayArticleByTopicFunction
            articles={this.state.ArticlesByTopic}
          />
        )}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        `https://n-c-news-api.herokuapp.com/api/articles?topic=${
          this.props.topic
        }`
      )
      .then(({ data }) => {
        this.setState({ ArticlesByTopic: data });
      })
      .catch(error => console.log(error));
  }
}

// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default DisplayArticlesByTopic;
