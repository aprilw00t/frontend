import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/layerOne/navBar";
import HomePage from "./components/layerTwo/displayAllArticles/homepage";
import DisplayArticleById from "./components/layerTwo/individualArticles/displayArticleByIdPage";
import DisplayArticlesByTopicPage from "./components/layerTwo/articlesByTopic/displayArticlesByTopicPage";
import CommentsPage from "./components/layerThree/extrasForTile/comments/displayCommentsByArticleIdPage";

import "./App.css";

class App extends Component {
  state = { loggedIn: "no", sortBy: "created_at", buttonChange: "login" };
  render() {
    return (
      <div className="App">
        <NavBar
          class="navlist"
          articleSort={this.sortState}
          loginhandler={e => {
            this.loginhandler(e);
          }}
          saveusername={e => {
            this.saveusername(e);
          }}
          username={this.state.loggedin}
          buttonChange={this.state.buttonChange}
        />
        {
          <Router>
            <HomePage
              class="marginboxes"
              path="/"
              sortBy={this.state.sortBy}
              loggedIn={this.state.loggedIn}
            />
            <CommentsPage
              class="marginboxes"
              path="/articles/:id/comment"
              loggedIn={this.state.loggedIn}
            />
            <DisplayArticleById
              class="marginboxes"
              path="/articles/:id"
              loggedIn={this.state.loggedIn}
            />
            <DisplayArticlesByTopicPage
              class="marginboxes"
              sortBy={this.state.sortBy}
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
    if (this.state.buttonChange === "login") {
      e.preventDefault();
      if (this.state.loggedIn === "jessjelly") {
        this.setState({ buttonChange: "log out" });
        alert("logged in");
      } else {
        alert("incorrect login");
      }
    } else {
      this.setState({ loggedIn: "no", buttonChange: "login" });
    }
  }
  sortState = click => {
    this.setState({ sortBy: click });
  };
}

export default App;
