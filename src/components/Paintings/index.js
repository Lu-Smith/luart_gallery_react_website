import React from "react";
import Icon1 from "../../images/1.jpg";
import Icon2 from "../../images/2.jpg";
import Icon3 from "../../images/3.jpg";

import {
  PaintingsContainer,
  PaintingsH1,
  PaintingsWrapper,
  PaintingsCard,
  PaintingsIcon,
  PaintingsP,
  PaintingsH2,
} from "./PaintingsElements";

const Paintings = () => {
  return (
    <PaintingsContainer id="gallery">
      <PaintingsH1>Paintings</PaintingsH1>
      <PaintingsWrapper>
        <PaintingsCard>
          <PaintingsIcon src={Icon1} />
          <PaintingsH2>Landscapes</PaintingsH2>
          <PaintingsP>Oil painting on canvas</PaintingsP>
        </PaintingsCard>
        <PaintingsCard>
          <PaintingsIcon src={Icon2} />
          <PaintingsH2>Abstracts</PaintingsH2>
          <PaintingsP>Oil painting on canvas</PaintingsP>
        </PaintingsCard>
        <PaintingsCard>
          <PaintingsIcon src={Icon3} />
          <PaintingsH2>Sound of Life</PaintingsH2>
          <PaintingsP>Oil painting on canvas</PaintingsP>
        </PaintingsCard>
      </PaintingsWrapper>
    </PaintingsContainer>
  );
};

export default Paintings;
