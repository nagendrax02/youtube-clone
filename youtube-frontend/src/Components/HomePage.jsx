
import Sidebar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos";

function HomePage(){

    return(
        <div style={{display:"flex"}}>
            <Sidebar/>
            <RecommendedVideos/>
        </div>
    )
}

export default HomePage;