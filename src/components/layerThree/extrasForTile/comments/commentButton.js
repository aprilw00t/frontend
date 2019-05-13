import React from "react";
import { Link } from "@reach/router";
function CommentButton(link) {
  return (
    <Link to={`/articles/${link.link}/comment`}>
      <div> Comments </div>
    </Link>
  );
}

export default CommentButton;
