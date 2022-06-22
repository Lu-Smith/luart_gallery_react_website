import React from "react";
import Video from "../../videos/video.mp4";
import { HomeContainer, HomeBg, VideoBg } from "./HomeElements";

const HomeSection = () => {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
    </HomeContainer>
  );
};

export default HomeSection;
