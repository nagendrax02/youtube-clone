import React, { useContext, useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from '@mui/material/Button';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from '@mui/icons-material/Mic';
import { Link } from "react-router-dom";
import {Context} from "../Context/Context";
import { auth, signInWithGoogle } from "../firebase";


function Navbar(){
    const [inputSearch, setInputSearch] = useState(""); 
  const { hamburgerChange, handlecheckLogin } = useContext(Context);
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUser(user);
    })
  }, [user])

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      alert('You have been signed out')
    })
  }

    return(
        <div className="header">
        <div className="header-left">
          <MenuIcon onClick={()=>{handlecheckLogin()}} style={{ fontSize: 28 }} className="header-icon" />
  
          <Link to="/">
            <img src="https://raw.githubusercontent.com/Subhampreet/Youtube-Clone-ReactJS/main/public/logo.jpg" alt="logo" className="header-logo" width="56px" />
          </Link>
        </div>
  
        <div className="header-middle">
          <div>
             <input
            className="navbar-search-input"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"
            placeholder="Search"
          />
  
          <Link to={`/search`} className="header-input-icon">
            <SearchIcon className="search-icon" />
          </Link>
          </div>
          <Link to={`/`} style={{padding:"2%", color:"black"}}>
              <MicIcon />
          </Link>
        </div>
  
        <div className="header-right">
          <VideocamIcon style={{ fontSize: 28 }} className="header-icon" />
          <AppsIcon style={{ fontSize: 28 }} className="header-icon" />
          <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
          {
            user === null ?
            (<Button variant="outlined" onClick={signInWithGoogle}>Sign In</Button>):
            (<Avatar src={user.photoURL} onClick={signOut} style={{cursor:"pointer"}}></Avatar>)
          }
        </div>
      </div> 
    )
}

export default Navbar;