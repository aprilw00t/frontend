import React from "react";
//import CommentPage from "../../../layerFour/commentPopup";
//import "../../App.css";
//import { Link } from "@reach/router";

function DeleteComment({ deletecomment, commentid }) {
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          deletecomment(commentid);
        }}
      >
        {" "}
        delete your comment{" "}
      </button>
    </div>
  );
}

export default DeleteComment;
