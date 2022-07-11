import React from "react";
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import { GiSeaDragon } from "react-icons/gi";

function Footer() {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__text">
          <p>© 2022 Essex County Chinese Canadian Association</p>
        </div>
        <div className="footer__icon">
          <a href={"https://www.youtube.com/user/ecccanet"}>
            <IconButton className="custom__button">
              <YouTubeIcon className="youtubeicon" />
            </IconButton>
          </a>
          <a href={"https://www.facebook.com/eccca.windsor"}>
            <IconButton className="custom__button">
              <FacebookIcon className="fbicon" />
            </IconButton>
          </a>
          <a href={"http://www.chineseinwindsor.com/"}>
            <IconButton className="custom__button">
              <GiSeaDragon className="dragonicon" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
