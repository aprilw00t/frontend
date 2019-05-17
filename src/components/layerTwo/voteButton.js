import React from "react";
//import vote from "./individualArticles/displayArticleByIdPage";
//import { Link } from "@reach/router";
import "../../App.css";
function VoteButton({ vote }) {
  return (
    <div>
      <button value="1" onClick={vote}>
        {" "}
        up{" "}
      </button>
      <button value="-1" onClick={vote}>
        {" "}
        down{" "}
      </button>
    </div>
  );
}

export default VoteButton;
