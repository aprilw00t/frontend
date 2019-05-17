import React from "react";
import { Link } from "@reach/router";
import ArticleTile from "../../layerThree/articleTile";
import "../../../App.css";
function DisplayArticles({ articles }) {
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.article_id} class="aroundwords">
            <Link to={`/articles/${article.article_id}`}>
              {<ArticleTile article={article} />}
            </Link>

            <br />
            <br />
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayArticles;
