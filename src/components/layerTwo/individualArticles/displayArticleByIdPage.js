import React from "react";
import axios from "axios";
import "../../../App.css";
import DisplayArticleByIdFunction from "./displayArticleByIdFunc";
import CommentsPage from "../../layerThree/extrasForTile/comments/displayCommentsByArticleIdPage";
class DisplayArticleById extends React.Component {
  state = {
    specificArticle: null,
    votes: null
  };

  render() {
    return (
      <div class="marginboxes">
        {this.state.specificArticle && (
          <DisplayArticleByIdFunction
            loggedIn={this.props.loggedIn}
            article={this.state.specificArticle}
            addacomment={e => this.addsacomment(e)}
            vote={e => this.vote(e)}
            votes={this.state.votes}
          />
        )}
        <CommentsPage class="bigmargin" id={this.props.id} />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`https://n-c-news-api.herokuapp.com/api/articles/${this.props.id}`)
      .then(({ data }) => {
        this.setState({
          specificArticle: data,
          votes: data.article.votes
        });
      })
      .catch(error => console.log(error));
  }
  addsacomment(e) {
    e.preventDefault();
    console.log(this.state.specificArticle.article.article_id);
    axios
      .post(
        `https://n-c-news-api.herokuapp.com/api/articles/${
          this.state.specificArticle.article.article_id
        }/comments`,
        {
          username: "jessjelly", //this.props.whatever
          body: `${e.target.comment.value}`
        }
      )
      .then(() => {
        // handle success
        alert("posted");
      })
      .catch(error => console.log(error));
  }
  vote(e) {
    let increment = parseInt(e.target.value);
    axios
      .patch(
        `https://n-c-news-api.herokuapp.com/api/articles/${
          this.state.specificArticle.article.article_id
        }`,
        {
          inc_votes: `${e.target.value}`
        }
      )
      .then(() => {
        this.setState({ votes: parseInt(this.state.votes) + increment });
        console.log(this.state);
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.votes !== prevState.votes) {
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

export default DisplayArticleById;
