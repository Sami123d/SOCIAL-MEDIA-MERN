import Feed from "../../Components/feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import "./profile.css";
import Rightbar from "../../Components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src="/src/assets/Post/9.jpeg" className="profileCoverImg" alt="" />
                <img src="/src/assets/Person/2.jpeg" className="profileUserImg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
