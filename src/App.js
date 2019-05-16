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
        <NavBar
          loginhandler={e => {
            this.loginhandler(e);
          }}
          saveusername={e => {
            this.saveusername(e);
          }}
          username={this.state.loggedin}
        />
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
  saveusername(e) {
    this.setState({ loggedIn: e.target.value });
  }
  loginhandler(e) {
    e.preventDefault();
    if (this.state.loggedIn === "jessjelly") {
      alert("logged in");
    } else {
      alert("incorrect login");
    }
  }
}

export default App;
