import React, {Component, useEffect, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
const User = (props) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => githubContext.getUserinfo(props.match.params.login), []);

  console.log(githubContext);

  return (
    <div>
      <div
        class="ui card"
        style={{width: "90%", height: "40vh", margin: "70px 40px"}}
      >
        <div class="content">
          <div class="center aligned header">{githubContext.user.name}</div>
          <div class="center aligned description">
            <p>{githubContext.user.location}</p>
            <p>{githubContext.user.bio}</p>
            <p>{githubContext.user.blog}</p>
            <p>{githubContext.user.hireable}</p>
            <a href={githubContext.user.html_url}>
              <button class="ui button" style={{margin: "8px"}}>
                View On Github
              </button>
            </a>
            <h3>
              <i
                class="user icon"
                style={{margin: "5px", wordSpacing: "100px", padding: "4px"}}
              ></i>
              {githubContext.user.following} following
              <i
                class="user icon"
                style={{margin: "5px", wordSpacing: "100px"}}
              ></i>
              {githubContext.user.followers} followers
            </h3>
          </div>
        </div>
        <div class="extra content">
          <div class="center aligned author">
            <a href={githubContext.user.html_url}>
              <img
                class="ui avatar image"
                style={{width: "70px", height: "auto"}}
                src={githubContext.user.avatar_url}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
