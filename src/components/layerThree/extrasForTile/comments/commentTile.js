import React from "react";
import DeleteComment from "./deleteYourCommentButton";
function CommentTile({ comment, loggedIn, deletecomment }) {
  if (loggedIn === comment.author) {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h5>author {comment.author}</h5>
        <h5>votes {comment.votes}</h5> <h5>{comment.created_at}</h5>
        <DeleteComment
          commentid={comment.comment_id}
          deletecomment={deletecomment}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h5>author {comment.author}</h5>
        <h5>votes {comment.votes}</h5> <h5>posted at{comment.created_at}</h5>
      </div>
    );
  }
}
export default CommentTile;
