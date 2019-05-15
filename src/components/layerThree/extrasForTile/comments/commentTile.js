import React from "react";
function CommentTile({ comment }) {
  return (
    <div>
      <h3>{comment.comment_id}</h3>
      <h3>{comment.body}</h3>
      <h3>{comment.author}</h3>
      <h3>{comment.created_at}</h3>
      <h3>{comment.votes}</h3>
      <br />
      <br />
    </div>
  );
}
export default CommentTile;
