import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HomeElements";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Welcome to Art World</HomeH1>
        <HomeP>Open your mind and find yourself.</HomeP>
        <HomeBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get in touch {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
