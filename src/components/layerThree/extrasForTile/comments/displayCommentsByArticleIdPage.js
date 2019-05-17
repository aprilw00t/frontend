import React from "react";
import axios from "axios";
import DisplayComments from "./displayComments";
class CommentsPage extends React.Component {
  state = { CommentList: null };

  render() {
    return (
      <div>
        {this.state.CommentList && (
          <div>
            <h3>comments</h3>
            <DisplayComments
              comments={this.state.CommentList}
              deletecomment={e => this.deletecomment(e)}
              loggedIn={this.props.loggedIn}
              newComment={this.props.newComment}
            />
          </div>
        )}
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

  deletecomment(commentid) {
    console.log(commentid);
    axios
      .delete(`https://n-c-news-api.herokuapp.com/api/comments/${commentid}/`)
      .then(() => {
        console.log(this.state.CommentList);
      })
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
