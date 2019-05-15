import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/layerOne/navBar";
import HomePage from "./components/layerTwo/displayAllArticles/homepage";
import DisplayArticleById from "./components/layerTwo/individualArticles/displayArticleByIdPage";
import DisplayArticlesByTopicPage from "./components/layerTwo/articlesByTopic/displayArticlesByTopicPage";
import CommentsPage from "./components/layerThree/extrasForTile/comments/displayCommentsByArticleIdPage";

import "./App.css";

class App extends Component {
  state = { loggedIn: "no" };
  render() {
    return (
      <div className="App">
        <NavBar className="navigate" />
        {
          <Router>
            <HomePage path="/" loggedIn={this.state.loggedIn} />
            <CommentsPage
              path="/articles/:id/comment"
              loggedIn={this.state.loggedIn}
            />
            <DisplayArticleById
              path="/articles/:id"
              loggedIn={this.state.loggedIn}
            />
            <DisplayArticlesByTopicPage
              path="/articles/topic/:topic"
              loggedIn={this.state.loggedIn}
            />
          </Router>
        }
      </div>
    );
  }
}

export default App;
