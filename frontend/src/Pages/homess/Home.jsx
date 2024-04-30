import "./home.css";
import Topbar from "../../Components/topbar/Topbar.jsx";
import Feed from "../../Components/feed/Feed.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Rightbar from "../../Components/rightbar/Rightbar.jsx";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

export default Home;
