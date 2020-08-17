import React from "react";

const Spinner = () => {
  return (
    <React.Fragment style={{height: "100vh"}} class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui big text loader">Loading</div>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
