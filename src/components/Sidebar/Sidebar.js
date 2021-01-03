import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import {
  Whatshot,
  Subscriptions,
  Home,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className={"sidebar"}>
      <SidebarRow selected Icon={Home} title={"Home"} />
      <SidebarRow Icon={Whatshot} title={"Trending"} />
      <SidebarRow Icon={Subscriptions} title={"Subscription"} />
      <hr />
      <SidebarRow Icon={VideoLibrary} title={"Library"} />
      <SidebarRow Icon={History} title={"History"} />
      <SidebarRow Icon={OndemandVideo} title={"Your Videos"} />
      <SidebarRow Icon={WatchLater} title={"Watch Later"} />
      <SidebarRow Icon={ThumbUpAltOutlined} title={"Liked Videos"} />
      <SidebarRow Icon={ExpandMoreOutlined} title={"Show More"} />
      <hr />
    </div>
  );
}

export default Sidebar;
