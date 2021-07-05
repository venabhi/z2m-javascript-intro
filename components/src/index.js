import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// render other componet file in the main index.js component
// props is used ti communicate data parent to child

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        name="abhi"
        timeAgo="today at 4:45pm"
        content="nice blog post"
        // we are dng props for the js attributes and callimg so use {}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        name="ram"
        timeAgo="today at 5:55pm"
        content="i like the subject"
        avatar={faker.image.avatar()}
      />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

//  using import and export we can ling the componets of the project
//  a project can have multiplke components
