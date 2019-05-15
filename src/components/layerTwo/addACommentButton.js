import React from "react";
import CommentPage from "../layerFour/commentPopup";
import "../../App.css";
//import { Link } from "@reach/router";
function myFunction(addacomment) {
  console.log("clicked");
  console.log(addacomment);
  return (
    <div>
      1) <CommentPage addacomment={addacomment} />{" "}
    </div>
  );
}
function AddACommentButton({ addacomment }) {
  return (
    <div>
      <button onClick={e => myFunction(addacomment)}> add a comment </button>
    </div>
  );
}

export default AddACommentButton;
