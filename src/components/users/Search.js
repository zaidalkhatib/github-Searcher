import React, {useState, useContext} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GithubContext from "../../context/github/githubContext";

toast.configure();

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const notify = () => {
    toast("Please eneter something");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      notify();
    } else {
      githubContext.getUser(input);
      setInput("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="from">
        <div class="ui fluid icon input">
          <input
            value={input}
            type="text"
            name="input"
            placeholder="Search"
            onChange={handleOnChange}
            style={{padding: "10px"}}
          />
          <i class="search icon"></i>
        </div>

        <button type="Submit" name="search" className="btn btn-dark btn-block">
          Submit
        </button>
        {githubContext.data.length > 0 && (
          <button
            type="submit"
            name="clear"
            className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
