import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./BottomIconDrawer.scss";

import Profile from "../profile/Profile";
import Chat from "../chat/Chat";
import Home from "../home/Home";
import Love from "../love/Love";
import { Link } from "react-router-dom";

export default function BottomIconDrawer() {
  const [active, setActive] = useState("home");

  const handleClick = (route) => {
    setActive(route);
  };

  const renderComponent = () => {
    switch (active) {
      case "home":
        return <Home />;
      case "love":
        return <Love />;
      case "chat":
        return <Chat />;
      case "profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="bottom-drawer">
      <div className="Bottom_activecomponent">
        {renderComponent()}
      </div>
      <div className="bottom_drawerlist">
        <div onClick={() => handleClick("home")}>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <div onClick={() => handleClick("love")}>
          <Link to="/love">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
        <div onClick={() => handleClick("chat")}>
          <Link to="/chat">
            <FontAwesomeIcon icon={faComment} />
          </Link>
        </div>
        <div onClick={() => handleClick("profile")}>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </div>
  );
}
