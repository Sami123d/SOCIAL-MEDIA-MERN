import "./share.css";
import axios from "axios"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import {Link} from  "react-router-dom";
import { useContext, useRef, useState } from "react";
function Share() {
  const {user} = useContext(AuthContext);
  const descr = useRef();
  const [File, setFile] = useState(null);
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id.$oid,
      desc: descr.current.value
    }
    if (File) {
      const data = new FormData();
      const fileName = Date.now() + File.name;
      data.append("name", fileName);
      data.append("file", File);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try{
      const res  = await axios.post("http://localhost:4000/api/posts/", newPost);
      console.log(res.data)
    }catch(err){console.log(err, "ewror")}
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`/profile/${user.username}`}>
            <img
            src={user.profilePicture ? user.profilePicture : "/src/assets/noAVtar.webp"}
            alt=""
            className="shareProfileImg"
          />
          </Link>
          
          <input
          ref={descr}
            type="text"
            className="shareInput"
            placeholder={`What's in your mind ${user.username}?`}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={SubmitHandler}  >
          <div className="shareOptions">
            <label htmlFor="file" style={{cursor: "pointer"}} className="shareOption">
              <PermMedia htmlColor="tomato" />
              <span className="shareOptionText">Photo or video</span>
              <input style={{display: "none"}}type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e)=> {setFile(e.target.files[0])}}/>
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type={"submit"}>Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
