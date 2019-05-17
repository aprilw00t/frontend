import React from "react";
import axios from "axios";
import "../../../App.css";
import DisplayArticles from "./displayArticles";
//import Sort from "./sort_by";

class HomePage extends React.Component {
  state = { ArticleList: null };

  render() {
    return (
      <div>
        {this.state.ArticleList && (
          <div class="marginboxes">
            <br />
            <br />
            <DisplayArticles articles={this.state.ArticleList} />
          </div>
        )}
      </div>
    );
  }

  sortState = click => {
    this.setState({ sortBy: click });
  };

  //change this get request to one from my hosted HEROKU app
  componentDidMount() {
    console.log(this.props.sortBy);
    axios
      .get(
        `https://n-c-news-api.herokuapp.com/api/articles?sort_by=${
          this.props.sortBy
        }`
      )
      .then(({ data }) => {
        this.setState({ ArticleList: data.articles });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.sortBy !== prevState.sortBy) {
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles?sort_by=${
            this.props.sortBy
          }`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
    if (this.props !== prevProps) {
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles?sort_by=${
            this.props.sortBy
          }`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
  }
}

export default HomePage;
