import {Link} from "react-router-dom"
import React from "react";
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";
import videoData from "../data.video.json"

function Search() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJyZBQmbGZE0RH4Rzh0my2iSArzhfVgUXY5iU8c1NYA=s900-c-k-c0x00ffffff-no-rj"
        channel="T-Series"
        verified
        subs="160M"
        noOfVideos={(14, 780)}
        description="Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music."
      />

      <hr />
      <h5>Latest from T-Series</h5>
      {videoData.map((el, i) => {
        return  <Link key={i} to="/video">
                  <ChannelVideo {...el} />
              </Link>
      })
      }
    </div>
  );
}

export default Search;