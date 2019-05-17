import React from "react";
import axios from "axios";
import DisplayComments from "./displayComments";
//import AddACommentButton from "../../../layerTwo/addACommentButton";
class CommentsPage extends React.Component {
  state = { CommentList: null, loggedIn: this.props.loggedIn };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.CommentList && (
          <div>
            <DisplayComments
              comments={this.state.CommentList}
              deletecomment={e => this.deletecomment(e)}
              loggedIn={this.state.loggedIn}
            />
          </div>
        )}
        comments rendered
      </div>
    );
  }
  //change this get request to one from my hosted HEROKU app
  componentDidMount() {
    axios
      .get(
        `https://n-c-news-api.herokuapp.com/api/articles/${
          this.props.id
        }/comments`
      )
      .then(({ data }) => {
        this.setState({ CommentList: data.comments });
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.commentList !== prevState.commentList) {
      console.log("uisfdhfi");
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles/${
            this.props.id
          }/comments`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
    if (this.props !== prevProps) {
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/articles/${
            this.props.id
          }/comments`
        )
        .then(({ data }) => {
          this.setState({ ArticleList: data.articles });
        })
        .catch(error => console.log(error));
    }
  }

  deletecomment(commentid) {
    console.log(commentid);
    axios
      .delete(`https://n-c-news-api.herokuapp.com/api/comments/${commentid}/`)
      .catch(error => console.log(error));
    alert("deleted");
  }
}
// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default CommentsPage;
