import React, {useState, useEffect} from "react";
import "./WatchVideo.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { BsThreeDots } from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import { useParams } from "react-router-dom"

const data = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
];
const data1 = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 3,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 4,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 5,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 6,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 7,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 8,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 9,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 10,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
];

function WatchVideo () {
  const [data, setData] = useState([])
  const { id } = useParams()
  
  console.log(id);

  const getVideos = async(req,res)=>{
    const result = await fetch("http://localhost:8080/api/video");
    const data = await result.json();
    console.log(data.videos);
    setData(data.videos);
  }

  useEffect(()=>{
    getVideos();
  }, [])
  
  const details = data.filter((el) => {
    return el.videopath === id && el;
  })
  
  console.log(details);

  return (
    <div className="wacthvideo_container">
      <div className="watchvideo_left">
           <div>
             <video controls width="100%" style={{maxWidth:"100%"}} >
                <source src={`http://localhost:8080/api/video/${id}`} />
                </video>
            <div>
              <p
                style={{
                  color: "rgb(54,164,255)",
                  marginBottom: "0px",
                  padding: "0px",
                }}
              >
                #NewSongs
              </p>
              <h4 style={{ marginBottom: "2px", margin: "0px", padding: "0" }}>
              {/* {
                details &&
                (details[0].name)
              } */}
              {
                details.map((el) => {
                  return el.name
                })
              }
              </h4>
              <div className="watchVideo_likebtn">
                <div>
                  <p style={{ color: "rgb(121,98,125)" }}>
                    1m+ Views• 10Jun
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <ThumbUpOffAltIcon>filled</ThumbUpOffAltIcon>{" "}
                    </p>
                  </div>
                  <div>
                    <p>221k</p>
                  </div>
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <ThumbDownOffAltIcon>filled</ThumbDownOffAltIcon>
                    </p>
                  </div>
                  <div>
                    <p>221k</p>
                  </div>
                  <div>
                    <p>
                      <RiShareForwardLine style={{ width: "25px", height: "20px" }} />
                    </p>
                  </div>
                  <div>
                    <p>SHARE</p>
                  </div>
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <AddRoadIcon>filled</AddRoadIcon>
                    </p>
                  </div>
                  <div>
                    <p>SAVE</p>
                  </div>
                  <div>
                    <p>
                        <BsThreeDots style={{ border: "none", background: "none", marginTop:"5px" }} />
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="watchVideo_channel">
                <div>
                  {" "}
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLSBoPARInTvGzb45qtZ2ki4mB_z_FtC3vez3Bdstg=s88-c-k-c0x00ffffff-no-rj"
                    alt="channel"
                    className="watchVideo_channelimg"
                  />
                </div>
                <div>
                  <p>Zee Music Company</p>
                  <p>👉🏻 SUBSCRIBE to Zee Music Company - https://bit.ly/2yPcBkS </p>
                </div>
                <div className="watchVideo_subscribediv">
                  <button className="watchVideo_btn">SUBSCRIBE</button>
                </div>
               </div>
             </div>
             </div>
      </div>
      <div className="watchvideo_right">
        <div>
          {data.map((el, i) => (
            <div style={{ marginTop:"10px"}} key={i} className="wactchVideo_right_similar">
              <div>
                <video width="200" height="120" style={{maxWidth:"200px"}} >
                <source src={`http://localhost:8080/api/video/${el.videopath}`} />
                </video>
              </div>
              <div>
                <p style={{ marginBottom: "8px", padding: "0" }}>{el.name}</p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  T-Series
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  1M+ Views 10 Jun
                </p>
              </div>
            </div>
          ))}
          {data.map((el, i) => (
            <div style={{ marginTop:"10px"}} key={el._id}className="wactchVideo_right_similar">
              <div>
                <video width="200" height="120" style={{maxWidth:"200px"}} >
                <source src={`http://localhost:8080/api/video/${el.videopath}`} />
                </video>
              </div>
              <div>
                <p style={{ marginBottom: "8px", padding: "0" }}>{el.name}</p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  T-Series
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  1M+ Views 10 Jun
                </p>
              </div>
            </div>
          ))}
          {data.map((el, i) => (
            <div style={{ marginTop:"10px"}} key={i} className="wactchVideo_right_similar">
              <div>
                <video width="200" height="120" style={{maxWidth:"200px"}} >
                <source src={`http://localhost:8080/api/video/${el.videopath}`} />
                </video>
              </div>
              <div>
                <p style={{ marginBottom: "8px", padding: "0" }}>{el.name}</p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  T-Series
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  1M+ Views 10 Jun
                </p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;
