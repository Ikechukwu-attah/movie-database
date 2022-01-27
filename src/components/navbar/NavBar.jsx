import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <span className="nav-bar__logo">IMDb</span>
      <div className="nav-bar__menu">
        <MenuIcon className="menuIcon" fontSize="large" />
        <span className="nav-bar__menuItem">Menu</span>
      </div>
      <div className="nav-bar__search">
        <div className="nav-bar__selections">
          <span className="selectionItems">All</span>
          <ArrowDropDownRoundedIcon
            fontSize="large"
            className="selectArrowIcon"
          />
        </div>
        <input
          type="text"
          className="nav-bar__searchInput"
          placeholder="search for any movie"
        />
        <SearchIcon className="searchIcon" fontSize="large" />
      </div>

      <div className="nav-bar__right">
        <span className="imdbPro">IMDbPro </span>
        <span className="rightborder">&nbsp;</span>
        <div className="nav-bar__rightListContainer">
          <AddCommentIcon fontSize="large" className="rightIcon" />
          <span className="nav-bar__rightWatchListText">WatchList</span>
        </div>
        <span className="nav-bar__rightSignIn">Sign In</span>
      </div>
    </nav>
  );
};

export default NavBar;
