import React from "react";
import "../../../App.css";
import { Link } from "@reach/router";
import ArticleTile from "../../layerThree/articleTile"; //./layerThree/extrasForTile/articleTile;
function DisplayArticleByTopicFunction({ articles: { articles } }) {
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.article_id} class="aroundwords">
            <Link to={`/articles/${article.article_id}`}>
              <ArticleTile article={article} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayArticleByTopicFunction;
