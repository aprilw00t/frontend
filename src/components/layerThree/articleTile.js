import React from "react";

function ArticleTile({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <h5>
        votes {article.votes} &thinsp; posted {article.created_at} &thinsp;
        author {article.author}
      </h5>
    </div>
  );
}

export default ArticleTile;
