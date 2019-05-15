import React from "react";
import axios from "axios";
//import DisplayComments from "./displayComments";
//import AddACommentButton from "../../../layerTwo/addACommentButton";
class AddACommentPage extends React.Component {
  //change this get request to one from my hosted HEROKU app
  componentDidMount(data) {
    console.log(this.props);
    // axios({
    //     method: 'post',
    //     url: `/api/articles/${id}/comments`
    //     data: {{username:
    //     body:data}

    //     }
    // }
    //  )
    //.then(({ data }) => {
    //this.setState({ CommentList: data.comments });
    //})
    //.catch(error => console.log(error));
  }
}
// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default AddACommentPage;
