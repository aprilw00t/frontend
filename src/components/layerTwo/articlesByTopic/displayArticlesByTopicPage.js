import React from "react";
import "../../../App.css";
import Err from "../../error/errorPage";
import axios from "axios";
import DisplayArticleByTopicFunction from "./displayArticlesByTopicFunction";
class DisplayArticlesByTopic extends React.Component {
  state = { ArticlesByTopic: null, err: null };

  render() {
    if (this.state.err) return <Err />;
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

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
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
  }
}

// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default DisplayArticlesByTopic;
