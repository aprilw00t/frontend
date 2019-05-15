import React from "react";
import CommentPage from "../layerFour/commentPopup";
import "../../App.css";
//import { Link } from "@reach/router";

function AddACommentButton({ addacomment }) {
  return (
    <div class="hoverWrapper">
      <button> add a comment </button>
      <div id="hoverShow1">
        1) <CommentPage addacomment={addacomment} />{" "}
      </div>
    </div>
  );
}

export default AddACommentButton;
