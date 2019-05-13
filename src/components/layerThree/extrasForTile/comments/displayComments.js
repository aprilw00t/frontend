import React from "react";
import CommentTile from "./commentTile";
function DisplayComments({ comments }) {
  console.log(comments);
  return (
    //comment tile goes here
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <CommentTile comment={comment} />
          </li>
        );
      })}
      )}
    </ul>
  );
}

export default DisplayComments;
