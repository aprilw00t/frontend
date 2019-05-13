import React from "react";
import axios from "axios";
import DisplayComments from "./displayComments";
class CommentsPage extends React.Component {
  state = { CommentList: null };

  render() {
    return (
      <div>
        {this.state.CommentList && (
          <DisplayComments comments={this.state.CommentList} />
        )}
        comments rendered
      </div>
    );
  }
  //change this get request to one from my hosted HEROKU app
  componentDidMount() {
    console.log(this.props);
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
}
// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default CommentsPage;
