import React from "react";

//import axios from "axios";
class Err extends React.Component {
  state = { ArticlesByTopic: null, err: null };

  render() {
    //if (this.state.err) return <Err />;
    return <div>ERROR</div>;
  }
}

// componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//       this.fetchData(this.props.userID);
//     }
//   }

export default Err;
