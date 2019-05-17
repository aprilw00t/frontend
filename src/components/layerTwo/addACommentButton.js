import React from "react";
import CommentPage from "../layerFour/commentPopup";
import "../../App.css";
//import { Link } from "@reach/router";
function myFunction(addacomment) {
  console.log("clicked");
  console.log(addacomment);
  return (
    <div>
      <CommentPage addacomment={addacomment} />{" "}
    </div>
  );
}
function AddACommentButton({ addacomment, loggedIn }) {
  return (
    <div>
      <form onSubmit={addacomment}>
        <label>
          <b>comment</b>
        </label>
        <input
          type="text"
          placeholder="Enter comment"
          name="comment"
          required
        />
        <button onClick={e => myFunction(addacomment)}> add a comment </button>
      </form>
    </div>
  );
}

export default AddACommentButton;
