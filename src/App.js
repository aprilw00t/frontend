import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/layerOne/navBar";
import NavBar2 from "./components/layerOne/navBar2";
import HomePage from "./components/layerTwo/displayAllArticles/homepage";
import DisplayArticleById from "./components/layerTwo/individualArticles/displayArticleByIdPage";
import DisplayArticlesByTopicPage from "./components/layerTwo/articlesByTopic/displayArticlesByTopicPage";
import CommentsPage from "./components/layerThree/extrasForTile/comments/displayCommentsByArticleIdPage";
import axios from "axios";
import Login from "./components/layerOne/login";
import Err from "../src/components/error/errorPage";
import Sort from "./components/layerTwo/displayAllArticles/sort_by";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: "no",
    sortBy: "created_at",
    buttonChange: "login",
    width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener("resize", this.smallWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.smallWindow);
  }
  smallWindow = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    if (this.state.width <= 657) {
      return (
        <div className="App2">
          <NavBar2 class="topnav" username={this.state.loggedin} />
          <div>
            <ul>
              <li class="inline">
                {" "}
                <Sort
                  class="inline"
                  articleSort={this.sortState}
                  sortBy={this.state.sortBy}
                />
              </li>{" "}
              &thinsp;
              <li class="inline">
                <Login
                  class="inline"
                  loginhandler={e => this.loginhandler(e)}
                  saveusername={e => this.saveusername(e)}
                  buttonChange={this.state.buttonChange}
                />
              </li>
            </ul>
            <br />
          </div>

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
    } else {
      return (
        <div className="App">
          <NavBar
            class="topnav"
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
              <Err default />
            </Router>
          }
        </div>
      );
    }
  }
  saveusername(e) {
    this.setState({ loggedIn: e.target.value });
  }
  loginhandler(e) {
    if (this.state.buttonChange === "login") {
      e.preventDefault();
      axios
        .get(
          `https://n-c-news-api.herokuapp.com/api/users/${this.state.loggedIn}`
        )
        .then(({ data }) => {
          this.setState({
            loggedIn: this.state.loggedIn + "yes",
            buttonChange: "log out"
          });
          alert("logged in");
        })
        .catch(error => {
          console.log(error);
          alert("incorrect login zzzz");
        });
    } else {
      this.setState({ loggedIn: "no", buttonChange: "login" });
    }
  }
  sortState = click => {
    this.setState({ sortBy: click });
  };
}

export default App;
