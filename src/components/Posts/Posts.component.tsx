import React, { useEffect } from "react";
import { Post } from "../../core/reducers/postsReducer";
import "./Posts.css";

interface Props {
  posts: Array<any>;
  isLoading: boolean;
  error: Error | string;
  getPosts(): void;
}

const PostsComponent = (props: Props) => {
  const { posts, isLoading, error, getPosts } = props;

  useEffect(() => {
    getPosts();
  }, []);

  if (error) {
    console.log("error: ", error);
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>{"Loading.."}</div>;
  }

  return (<div className="posts-container">
    {posts && posts.map((post: Post) => (
        <div className="post" key={post.id}>
            <a>{ post.title }</a>
            <p>{ post.body }</p>
        </div>
    ))}
  </div>)
};

export default PostsComponent;
