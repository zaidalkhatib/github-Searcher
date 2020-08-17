import React, {Component, useState, useEffect} from "react";
import "./App.css";
import NavBar from "./components/layout.js/NavBar";
import axios from "axios";
import UserItem from "./components/users/UserItem";
import User from "./components/users/User";
import Search from "./components/users/Search";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import GithubState from "./context/github/GithubState";
import GithubContext from "./context/github/githubContext";
import NotFound from "./components/layout.js/NotFound";

const App = () => {
  // const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({});

  // const getUser = async (value) => {
  //   setloading(false);
  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/search/users?q=${value}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setData(response.data.items);
  //     setloading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const clearUsers = () => {
  //   setData([]);
  //   setloading(false);
  //   console.log("clicked");
  // };

  // const getUserinfo = async (userName) => {
  //   setloading(true);
  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/users/${userName}?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     console.log(response.data);

  //     setUser(response.data);
  //     setloading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="App">
      <GithubState>
        <NavBar title={"Github Search"} icon={"fab fa-github-alt"} />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Search />
              <UserItem />
            </Route>

            <Route
              path="/user/:login"
              render={(props) => <User {...props} exact />}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </GithubState>
    </div>
  );
};

export default App;
