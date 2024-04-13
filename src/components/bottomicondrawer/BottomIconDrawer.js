// BottomIconDrawer.js
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
export default function BottomIconDrawer() {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
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
      <div className="content">{renderComponent()}</div>
      <nav>
        <ul>
          <li onClick={() => setActiveComponent("home")}>
            {" "}
            <FontAwesomeIcon icon={faHome} className="icon" />
          </li>
          <li onClick={() => setActiveComponent("love")}>
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </li>
          <li onClick={() => setActiveComponent("chat")}>
            {" "}
            <FontAwesomeIcon icon={faComment} className="icon" />
          </li>
          <li onClick={() => setActiveComponent("profile")}>
            {" "}
            <FontAwesomeIcon icon={faUser} className="icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
