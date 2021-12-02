import {Link} from "react-router-dom"
import React from "react";
import { Avatar, Button } from "@material-ui/core";
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";
import videoData from "../data.video.json"

function Trending() {
  return (
    <div className="searchPage">
      <hr />
     <div className="text-left">
          <div className="row">
          <div className="col-4"> <Avatar className="channelRow_logo" src={"https://www.youtube.com/img/trending/avatar/trending_avatar.png"} alt="" />
          </div>
          <div className="col-8 align-middle"><h2 className="m- text-left m-0 p-0">
               {"Trending Page"}
          </h2>
          </div>
          </div>
    </div>
      <hr />
      <h5>Latest In Trending</h5>
      {videoData.map((el, i) => {
        return  <Link key={i} to="/video">
                  <ChannelVideo {...el} />
              </Link>
      })
      }
    </div>
  );
}

export default Trending;