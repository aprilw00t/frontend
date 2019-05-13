import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/layerOne/navBar";
import HomePage from "./components/layerTwo/displayAllArticles/homepage";
import DisplayArticleById from "./components/layerTwo/individualArticles/displayArticleByIdPage";
import DisplayArticlesByTopicPage from "./components/layerTwo/articlesByTopic/displayArticlesByTopicPage";
import CommentsPage from "./components/layerThree/extrasForTile/comments/displayCommentsByArticleIdPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="navigate" />
        {
          <Router>
            <HomePage path="/" />
            <CommentsPage path="/articles/:id/comment" />
            <DisplayArticleById path="/articles/:id" />
            <DisplayArticlesByTopicPage path="/articles/topic/:topic" />
          </Router>
        }
      </div>
    );
  }
}

export default App;