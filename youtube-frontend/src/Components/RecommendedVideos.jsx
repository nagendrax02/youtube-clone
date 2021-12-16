import React, { useContext, useState,useEffect } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import {Context} from "../Context/Context";
import { Link } from "react-router-dom";
import data from "../data.json"



export function RecommendedVideos(){
  const [videos,setVideos] = useState();
  const getVideos = async(req,res)=>{
    const result = await fetch("https://masai-youtube.herokuapp.com/api/video/");
    const data = await result.json();
    
    setVideos(data.videos);
  }

  useEffect(()=>{
    getVideos();
  },[])
  if(videos){
    return <div className="max-3"> {videos.map(el=>{
      console.log('className:', el.views)
      return (
    //     <video controls autoplay width="300" class="video-player">
    //     <source src={`http://localhost:8080/api/video/${el.videopath}`}/>
    // </video>

    <div className="recommended">
        {/* <h2>Recommended</h2> */}

        <div className="recommendedVideo">
          <Link to={`/video/${el._id}`}> 
    <VideoCard
            title={el.name}
            views={el.views}
            videoUrl={el.videopath}
            timestamp="10 days ago"
            image="https://i.ytimg.com/vi/tOXMlseYc7E/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/a/AATXAJyAtaR5kNZ5b7-4ytyB2NOnmPYRO9IXqHHxOBRH=s900-c-k-c0x00ffffff-no-rj"
            channel="T Series"
          />
          </Link>
          </div>
        </div>
      )})}
    </div>
  }
  else{
   return <>Loading</>
  }
}