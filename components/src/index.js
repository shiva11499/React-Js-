import React from "react";
import ReactDom from "react-dom";
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className = "ui container comments">
           <CommentDetail author = "Shivansh" />
           <CommentDetail author = "Aayushi" />
           <CommentDetail author = "Ayush" />
        </div>
    );
}

ReactDom.render(<App/>, document.querySelector('#root'));