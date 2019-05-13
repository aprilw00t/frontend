import React from "react";

function ArticleTile({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <h3>{article.topic}</h3>
      <h5>{article.author}</h5>
      <h5>{article.article_id}</h5>
      <h5>{article.votes}</h5>
      <h5>{article.created_at}</h5>
    </div>
  );
}

export default ArticleTile;
