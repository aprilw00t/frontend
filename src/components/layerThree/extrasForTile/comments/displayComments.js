import React from "react";
import CommentTile from "./commentTile";
//import VoteButton from "../../../layerTwo/voteButton";
function DisplayComments({ comments, loggedIn, deletecomment, newComment }) {
  if (newComment) {
    return (
      <div>
        <li class="aroundwords">
          <h3>{newComment[0].title}</h3> <h5> author{newComment[0].author} </h5>{" "}
          <h5>
            posted
            {newComment[0].created_at}
          </h5>{" "}
          <h5> votes{newComment[0].votes}</h5>
        </li>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} class="aroundwords">
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
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} class="aroundwords">
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
      </div>
    );
  }
}

export default DisplayComments;
