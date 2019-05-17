import React from "react";
import { Link } from "@reach/router";
import ArticleTile from "../../layerThree/articleTile";
import CommentButton from "../../layerThree/extrasForTile/comments/commentButton";
import "../../../App.css";
function DisplayArticles({ articles }) {
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              {<ArticleTile article={article} />}
            </Link>

            <CommentButton link={article.article_id} />

            <br />
            <br />
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayArticles;
