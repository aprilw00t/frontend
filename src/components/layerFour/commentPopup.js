import React from "react";
//import VoteButton from "../layerTwo/voteButton";
function CommentPage({ addacomment }) {
  return (
    <form onSubmit={addacomment}>
      <label>
        <b>comment </b>
      </label>
      <input type="text" placeholder="Enter comment" name="comment" required />
      <button type="submit">submit</button>
      <button type="button">Cancel</button>
    </form>
  );
}
export default CommentPage;
