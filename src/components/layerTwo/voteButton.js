import React from "react";
//import vote from "./individualArticles/displayArticleByIdPage";
//import { Link } from "@reach/router";
function VoteButton({ vote }) {
  return (
    <div>
      <button onClick={vote}> up </button>
      <button onClick={vote}> down </button>
    </div>
  );
}

export default VoteButton;
