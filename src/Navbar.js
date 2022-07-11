import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { strings } from "./util/local";
import "./Navbar.css";

function Navbar({ lang, setLang, cookies, setCookie }) {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  useEffect(() => {
    setCookie("language", lang);
  }, [lang, setCookie]);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // const showButton = () => {
  //   if (window.innerWidth <= 980) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener("resize", showButton);
  strings.setLanguage(lang);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/eccca_banner.jpeg" alt="logobanner"></img>
          </Link>
          <div className="homeSubTitle">
            <p>{strings.homeSubTitle}</p>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-time">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {strings.NavHome}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                {strings.NavAbout}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/announce"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavAnno}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/evergreen"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavEver}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavGallery}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavContact}
              </Link>
            </li>
            <li className="symbol">
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  {strings.langTag}
                </InputLabel>
                <Select
                  value={lang}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={e => {
                    setLang(e.target.value);
                  }}
                  label="Language"
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ch">中文</MenuItem>
                </Select>
              </FormControl>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
