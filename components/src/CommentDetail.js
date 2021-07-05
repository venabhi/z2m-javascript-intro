import React from "react";
// import ReactDom from "react-dom";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>{" "}
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>{" "}
        <div className="metadata">
          <span className="date"> {props.timeAgo} </span>{" "}
        </div>{" "}
        <div className="text"> {props.content} </div>{" "}
      </div>{" "}
    </div>
  );
};

//  export component will use to access / link the componrnt to other index components

export default CommentDetail;
