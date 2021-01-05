import React from "react";
import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";
import { TuneOutlined } from "@material-ui/icons";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className={"searchPage"}>
      <div className="searchPage_filter">
        <TuneOutlined />
        <h2>filter</h2>
      </div>
      <hr />
      <ChannelRow
        image={
          "https://i.ytimg.com/vi/hj_XHjnHrhI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnD1nO8l7-FiXkP2mzanAZRmBR1A"
        }
        channel={"Irad Bouzidi"}
        verified
        subs={"100k"}
        noOfVideos={382}
        description={"Descripton here"}
      />
      <VideoRow
        subs={"100k"}
        viwes={"1.5M"}
        description={"Descripton here"}
        timestamp={"20 seconds ago"}
        channel={"Irad Bouzidi"}
        image={
          "https://i.ytimg.com/vi/hj_XHjnHrhI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnD1nO8l7-FiXkP2mzanAZRmBR1A"
        }
        title={"Become a web dev in 10min"}
      />
    </div>
  );
}

export default SearchPage;
