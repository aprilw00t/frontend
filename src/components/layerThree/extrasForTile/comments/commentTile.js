import React from "react";
import VoteButton from "../../../layerTwo/voteButton";
import DeleteComment from "./deleteYourCommentButton";
function CommentTile({ comment, loggedIn, deletecomment }) {
  if (loggedIn === comment.author + "yes") {
    return (
      <div>
        <h5>{comment.body}</h5>
        <h5>
          votes {comment.votes} &thinsp; {comment.created_at}&thinsp;author{" "}
          {comment.author}
        </h5>{" "}
        <DeleteComment
          commentid={comment.comment_id}
          deletecomment={deletecomment}
        />
      </div>
    );
  } else if (loggedIn.slice(-3) === "yes") {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h5 class="lines">
          votes {comment.votes} &thinsp; {comment.created_at} &thinsp; author{" "}
          {comment.author}
        </h5>{" "}
        <VoteButton />
      </div>
    );
  } else {
    return (
      <div>
        <h3>{comment.body}</h3>
        <h5 class="lines">
          votes {comment.votes} &thinsp; {comment.created_at} &thinsp; author{" "}
          {comment.author}
        </h5>{" "}
      </div>
    );
  }
}
export default CommentTile;
