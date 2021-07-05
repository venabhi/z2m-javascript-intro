import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// render other componet file in the main index.js component

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

//  using import and export we can ling the componets of the project
//  a project can have multiplke components
