import {SET_LOADING, CLEAR_USERS, GET_USER, SEARCH_USERS} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};
    case SEARCH_USERS:
      return {...state, data: action.playload, loading: false};

    case CLEAR_USERS:
      return {...state, data: [], loading: false};

    case 8:
      return {...state, user: action.playload, loading: false};
    default:
      return state;
  }
};
