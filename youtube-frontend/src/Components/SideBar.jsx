import React, { useContext, useState } from "react";
import './SideBar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import {Context} from "../Context/Context";
import {Link} from "react-router-dom"

function Sidebar() {

    const {hamburgerChange,handlecheckLogin} = useContext(Context);


    return (
        <div className={hamburgerChange ? "sidebarBlock":"sidebar"}>
            <Link to="/"><SidebarRow selected Icon={HomeIcon} title="Home" /></Link>
            <Link to="/trending"><SidebarRow Icon={WhatshotIcon} title="Trending" /></Link>
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <SidebarRow Icon={FlagIcon} title="Report History" />
            <SidebarRow Icon={HelpIcon} title="Help" />
            <SidebarRow Icon={FeedbackIcon} title="Send Feedback" />
            <hr />

        </div>
    )
}

export default Sidebar