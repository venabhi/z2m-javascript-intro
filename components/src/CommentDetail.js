import React from "react";
import ReactDom from "react-dom";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>{" "}
      <div className="content">
        <a href="/" className="author">
          sam{" "}
        </a>{" "}
        <div className="metadata">
          <span className="date"> today at 6:00 pm </span>{" "}
        </div>{" "}
        <div className="text"> nice blog post! </div>{" "}
      </div>{" "}
    </div>
  );
};

//  export component will use to access / link the componrnt to other index components

export default CommentDetail;
