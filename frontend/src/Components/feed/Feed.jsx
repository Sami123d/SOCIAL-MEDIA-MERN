import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `http://localhost:4000/api/posts/profile/${username}`
          )
        : await axios.get(
            "http://localhost:4000/api/posts/timeline/663204439bfa630a2967ac25"
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {posts.map((p) => (
            <Post key={p?._id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
