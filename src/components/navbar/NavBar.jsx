import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "./navBar.scss";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const onSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    console.log("result", result);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=266d4fdbc6d6a07f319f748963762a86&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      console.log("Response", response.data.results[0].title);
      if (!response.data.error) {
        setResult(response.data.results);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          onChange={onSearch}
          value={search}
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
