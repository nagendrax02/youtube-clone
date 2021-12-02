

import Sidebar from "./SideBar";
import WatchVideo from "./WatchVideo";

function VideoPage(){

    return(
        <div style={{display:"flex"}}>
            <Sidebar/>
            <WatchVideo/>
        </div>
    )
}

export default VideoPage;