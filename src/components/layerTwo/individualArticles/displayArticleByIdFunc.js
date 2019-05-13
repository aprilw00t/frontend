import React from "react";
import CommentButton from "../../layerThree/extrasForTile/comments/commentButton";
function DisplayArticleByIdFunction({ article: { article } }) {
  return (
    <ul>
      {
        <li key={article.article_id}>
          {}
          <div>
            <h3>{article.title}</h3>
            <h3>{article.topic}</h3>
            <h5>{article.author}</h5>
            <h5>{article.article_id}</h5>
            <h5>{article.votes}</h5>
            <h5>{article.body}</h5>
            <h5>{article.created_at}</h5>
            <CommentButton link={article.article_id} />
          </div>
          }
        </li>
      }
      )
    </ul>
  );
}

export default DisplayArticleByIdFunction;
