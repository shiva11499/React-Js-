import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Shivansh"
        time="Today at 5:25PM"
        content="Nice post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Aayushi"
        time="Today at 7:45PM"
        content="Great job!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Ayush"
        time="Yesterday at 11:30AM"
        content="Could be a little better"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
