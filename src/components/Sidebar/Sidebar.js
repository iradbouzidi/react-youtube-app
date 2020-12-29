import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import { Whatshot, Subscriptions, Home } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className={"sidebar"}>
      <SidebarRow Icon={Home} title={"Home"} />
      <SidebarRow Icon={Whatshot} title={"Trending"} />
      <SidebarRow Icon={Subscriptions} title={"Subscription"} />
    </div>
  );
}

export default Sidebar;
