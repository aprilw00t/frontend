import React from "react";
import axios from "axios";
import DisplayArticleByIdFunction from "./displayArticleByIdFunc";
class DisplayArticleById extends React.Component {
  state = { specificArticle: null };

  render() {
    return (
      <div>
        article by id
        {this.state.specificArticle && (
          <DisplayArticleByIdFunction article={this.state.specificArticle} />
        )}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`https://n-c-news-api.herokuapp.com/api/articles/${this.props.id}`)
      .then(({ data }) => {
        this.setState({ specificArticle: data });
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

export default DisplayArticleById;
