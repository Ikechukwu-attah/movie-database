import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.scss";

const movieIcons = [
  { url: "https://facebook.com", Icon: FacebookIcon },
  { url: "https://twitter.com", Icon: TwitterIcon },
  { url: "https://youtube.com", Icon: YouTubeIcon },
  { url: "https://instagram.com", Icon: InstagramIcon },
];

const Footer = () => {
  return (
    <div className="movie-footer">
      <div className="movie-footer__icons-item">
        <ul className="movie-footer__list-items">
          {movieIcons.map(({ Icon, url }) => {
            return (
              <li key={url} className="movie-icons">
                <a href={url}>
                  <Icon fontSize="large" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <nav className="footer-menu">
        <ul className="footer-menu__section1">
          <li className="section1-item">Get the IMDb App</li>
          <li className="section1-item">Help</li>
          <li className="section1-item">Site Index</li>
          <li className="section1-item">IMDbPro</li>
          <li className="section1-item">Box Office Mojo</li>
          <li className="section1-item">IMDbPro</li>
          <li className="section1-item">IMDb Developer</li>
        </ul>

        <ul className=" footer-menu__section1 footer-menu__section1--second-row">
          <li className="section1-item">Get the IMDb App</li>
          <li className="section1-item">Help</li>
          <li className="section1-item">Site Index</li>
          <li className="section1-item">IMDbPro</li>
          <li className="section1-item">Box Office Mojo</li>
          <li className="section1-item">IMDbPro</li>
          <li className="section1-item">IMDb Developer</li>
        </ul>
        <span> &copy; Ikechukwu Attah </span>
      </nav>
    </div>
  );
};

export default Footer;
