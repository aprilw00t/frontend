import React from "react";

function ArticleTile({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <h5>author {article.author}</h5>
      <h5>votes {article.votes}</h5> <h5> posted {article.created_at}</h5>
    </div>
  );
}

export default ArticleTile;
