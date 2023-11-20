import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import postData from "../data.json";

const Post = ({ post }) => {
  const createMarkup = () => {
    const contentWithLineBreaks = post.content.replace(/\n/g, "<br>");
    return { __html: contentWithLineBreaks };
  };

  return (
    <div className="post">
      <div className="post-title">
        <h2>{post.title}</h2>
        <i>
          <AiOutlineLike
            style={{
              color: "white",
              backgroundColor: "#f5aa42",
              padding: "5px",
              fontSize: "1.5em",
              borderRadius: "50%",
            }}
          />
        </i>
      </div>
      <p dangerouslySetInnerHTML={createMarkup()} />
      <div className="author">
        <p
          className="author-base"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h2 style={{ margin: 0, marginRight: "5px" }}>{post.designation}</h2>
          <h3>by {post.author}</h3>
        </p>
        <p>
          {post.date} . {post.readTime} . {post.views} Views
        </p>
      </div>
    </div>
  );
};

const PostsSection = () => (
  <div className="posts-section">
    {postData.map((post, index) => (
      <Post key={index} post={post} />
    ))}
  </div>
);

export default PostsSection;
