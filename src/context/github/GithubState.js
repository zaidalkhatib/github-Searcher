import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {SET_LOADING, CLEAR_USERS, GET_USER, SEARCH_USERS} from "../types";

const GithubState = (props) => {
  const initalState = {
    user: {},
    data: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initalState);

  const getUser = async (value) => {
    setLoading();
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${value}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      //   setData(response.data.items);
      dispatch({type: SEARCH_USERS, playload: response.data.items});
    } catch (error) {
      console.error(error);
    }
  };
  const setLoading = () => {
    dispatch({type: SET_LOADING});
  };

  const clearUsers = () => {
    dispatch({type: CLEAR_USERS});
  };
  const getUserinfo = async (userName) => {
    setLoading();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);

      dispatch({type: GET_USER, playload: response.data});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        data: state.data,
        user: state.user,
        loading: state.loading,
        getUser,
        clearUsers,
        getUserinfo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
