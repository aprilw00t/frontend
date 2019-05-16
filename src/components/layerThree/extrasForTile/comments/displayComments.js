import React from "react";
import CommentTile from "./commentTile";
function DisplayComments({ comments, loggedIn, deletecomment }) {
  console.log(loggedIn);
  return (
    //comment tile goes here
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <CommentTile
              comment={comment}
              loggedIn={loggedIn}
              deletecomment={deletecomment}
            />
          </li>
        );
      })}
      )}
    </ul>
  );
}

export default DisplayComments;
