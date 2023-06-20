import React from "react";
import * as Icon from "react-bootstrap-icons";
import "../module.css";
function Footer() {
  return (
    <footer className="ro">
      <a
        className="insta"
        href="https://www.instagram.com/tnroverservice/"
      >
        <Icon.Instagram></Icon.Instagram>
      </a>

      <a className="face" href="#">
        <Icon.Facebook></Icon.Facebook>
      </a>

      <a className="link" href="#">
        <Icon.Linkedin></Icon.Linkedin>
      </a>

      <a className="what" href="https://t.me/+lDs3sbk5J6tjMTI9">
        <Icon.Telegram></Icon.Telegram>
      </a>
    </footer>
  );
}

export default Footer;
