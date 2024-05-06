import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user}  = useContext(AuthContext)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `http://localhost:4000/api/posts/profile/${username}`
          )
        : await axios.get(
            `http://localhost:4000/api/posts/timeline/${user._id.$oid}`
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id.$oid]);
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
