import React, {Component, useContext} from "react";
import Spinner from "../layout.js/Spinner";
import {Link} from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
const UserItem = () => {
  const githubContext = useContext(GithubContext);
  const styleCard = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "1rem",
  };

  return (
    <div>
      {githubContext.loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container" style={styleCard}>
            {githubContext.data.map((datas, index) => {
              return (
                <div key={index} className="card text-center">
                  <a href={datas.html_url}>
                    <img
                      src={datas.avatar_url}
                      alt="profile pic "
                      className="round-img"
                      style={{width: "100px"}}
                    />
                  </a>
                  <h3>{datas.login}</h3>
                  <div>
                    <Link
                      to={`/user/${datas.login}`}
                      className="btn btn-dark btn-sm my-1 "
                    >
                      More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserItem;
