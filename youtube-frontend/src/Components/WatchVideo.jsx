import React, {useState, useEffect} from "react";
import "./WatchVideo.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { BsThreeDots } from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import { useParams } from "react-router-dom"


function WatchVideo () {
  const [data, setData] = useState([])
  const  {id}  = useParams();
  // console.log(id)

  const getdata =async (req,res)=>{
    try{
      let res = await fetch(`http://masai-youtube.herokuapp.com/api/video/?_id=${id}`);
      let data = await res.json();
      let videos = data.videos;
      console.log(videos)
      setData(videos);

    }catch(err){
      console.log('error',err.message);
    }
  }

  useEffect(()=>{
      getdata();
  },[])

  // console.log('------->',data[0].videopath)

if(data[0]){
  return (< div style={{border:'1px solid black', width:'100%', textAlign:'center'}}>
    <video style={{width:'800px'}} controls width="800px" height="100%" autoplay  class="video-player" poster="data:image/jpeg">
                <source src={`https://masai-youtube.herokuapp.com/api/video/${data[0].videopath}`} />
                </video>
  </div>);
}else{
  return <>Loading</>
}
}

export default WatchVideo;
