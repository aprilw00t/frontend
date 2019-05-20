import React from "react";
//import vote from "./individualArticles/displayArticleByIdPage";
//import { Link } from "@reach/router";
import "../../App.css";
function VoteButton({ vote }) {
  return (
    <div class="topics">
      <button value="1" onClick={vote}>
        {" "}
        yass |{" "}
      </button>{" "}
      <button value="-1" onClick={vote}>
        {" "}
        | no{" "}
      </button>
    </div>
  );
}

export default VoteButton;
