import Trending from "./Trends";
import Sidebar from "./SideBar";


function TrendingPage(){

    return(
        <div style={{display:"flex"}}>
            <Sidebar/>
            <Trending/>
        </div>
    )
}

export default TrendingPage;