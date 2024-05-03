import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="leftTopbar">
          <Link to={"/"}  style={{ textDecoration: 'none' }}> 
            <p className="logoTopbar">Lamasocial</p>
          </Link>
        </div>
        <div className="middleTopbar">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search for Friend,post or video"
            />
          </div>
        </div>
        <div className="rightTopbar">
          <div className="rightLink">
            <span className="topbarLink">homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="rightIconsDiv">
            <div className="rightIconsItem">
              <PersonIcon />
              <div className="rightIconsBadge">1</div>
            </div>
            <div className="rightIconsItem">
              <MessageIcon />
              <div className="rightIconsBadge">2</div>
            </div>
            <div className="rightIconsItem">
              <NotificationsIcon />
              <div className="rightIconsBadge">3</div>
            </div>
          </div>
          <img
            src="/src/assets/Person/1.jpeg"
            className="rightImgTopbar"
            alt="polki"
          />
        </div>
      </div>
    </>
  );
}

export default Topbar;
