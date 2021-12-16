import { Avatar } from '@material-ui/core';
import React from 'react';
import "./VideoCard.css";

function VideoCard({image, title, channel, views, timestamp, channelImage, videoUrl}) {
    // console.log('title----->', title);
    // console.log('videoUrl--->', videoUrl)
    return (
        <div className="videoCard">
            {/* <img src={image} alt="" className="videoCard-image" /> */}
                <video controls width="100%"  autoplay  class="video-player" poster="data:image/jpeg">
                <source src={`https://masai-youtube.herokuapp.com/api/video/618e31bda87597826bbebdcd-ac9064b9-30f6-48b5-867d-afc5806e1ab8`} />
                </video>
            <div className="videoCard-info p-0">
                <Avatar
                    className="videoCard-avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video-text">
                    <div><h4>{title}</h4>
                    <p className="m-0 p-0">{channel}</p>
                    <p className="m-0 p-0">
                            {"0 views"} <span className="dot">{" "}·{" "}</span> {timestamp}
                    </p></div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard