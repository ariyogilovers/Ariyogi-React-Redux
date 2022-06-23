import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube Componen</p>;
        <hr />
        <YouTubeComp
          time="7.12"
          title="Tutorial React JS - Bagian 1"
          desc="2x ditonton. 2 hari yng lalu"
        />
        <YouTubeComp
          time="8.02"
          title="Tutorial React JS - Bagian 2"
          desc="20x ditonton. 4 hari yng lalu"
        />
        <YouTubeComp
          time="7.12"
          title="Tutorial React JS - Bagian 3"
          desc="200x ditonton. 6 hari yng lalu"
        />
        <YouTubeComp
          time="4.12"
          title="Tutorial React JS - Bagian 1"
          desc="300x ditonton. 30 hari yng lalu"
        />
        <YouTubeComp />
      </Fragment>
    );
  }
}

export default YoutubeCompPage;
