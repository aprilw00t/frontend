import React from "react";
import AddACommentButton from "../addACommentButton";
import VoteButton from "../voteButton";
import "../../../App.css";
function DisplayArticleByIdFunction({
  article: { article },
  addacomment,
  vote,
  loggedIn,
  votes
}) {
  if (loggedIn === "jessjelly") {
    return (
      <ul>
        {
          <li key={article.article_id} class="aroundwords">
            <div>
              <h3>{article.title}</h3>
              <h5>author {article.author}</h5>
              <h5 class="article">{article.body}</h5>
              <h5>votes {votes}</h5>

              <h5>posted {article.created_at}</h5>
              <VoteButton vote={vote} />
              <AddACommentButton addacomment={addacomment} />
            </div>
          </li>
        }
      </ul>
    );
  } else {
    return (
      <ul>
        {
          <li key={article.article_id} class="aroundwords">
            {}
            <div>
              <h3>{article.title}</h3>
              <h5>author {article.author}</h5>
              <h5 class="article">{article.body}</h5>
              <h5>votes {votes}</h5>

              <h5>posted {article.created_at}</h5>
            </div>
          </li>
        }
      </ul>
    );
  }
}

export default DisplayArticleByIdFunction;
