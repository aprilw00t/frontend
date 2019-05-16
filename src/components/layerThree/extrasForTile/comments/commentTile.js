import React from "react";
import DeleteComment from "./deleteYourCommentButton";
function CommentTile({ comment, loggedIn, deletecomment }) {
  console.log(loggedIn);
  if (loggedIn === comment.author) {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h3>author {comment.author}</h3>
        <h3>{comment.created_at}</h3>
        <h3>votes {comment.votes}</h3>
        <DeleteComment deletecomment={deletecomment} />
      </div>
    );
  } else {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h3>author {comment.author}</h3>
        <h3>{comment.created_at}</h3>
        <h3>votes {comment.votes}</h3>
      </div>
    );
  }
}
export default CommentTile;
