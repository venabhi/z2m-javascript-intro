import React from "react";

const ApprovalCard = (props) => {
  return (
    <div>
      <div className="content">{props.CommentDetail}</div>
      <div class="extra contenmt">
        <div class="ui two buttons">
          <div>Approve</div>
          <div>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
