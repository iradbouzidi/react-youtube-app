import React from "react";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className={"header"}>
      <div className={"header__left"}>
        <Menu />
        <img
          className={"header__logo"}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          }
          alt={""}
        />
      </div>

      <div className={"header__input"}>
        <input placeholder={"Search"} type={"text"} />
        <Search className={"header__inputButton"} />
      </div>

      <div className={"header__icons"}>
        <VideoCall className={"header__icon"} />
        <Apps className={"header__icon"} />
        <Notifications className={"header__icon"} />
        <Avatar
          alt="Irad Bouzidi"
          src="https://avatars3.githubusercontent.com/u/37379966?s=400&u=dca4c787eb763f047ea76d38e1d76918e195bfd3&v=4"
        />
      </div>
    </div>
  );
}

export default Header;