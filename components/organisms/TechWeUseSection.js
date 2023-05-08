import { useState } from "react";
import { StyledTechWeUseSection } from "../styled/TechWeUseSectionStyles";
import {
  HeadingSecondary,
  Text,
  HeadingTertiary,
  SubHeading,
} from "../atoms/Typography";

import Slider from "../molucles/Slider";

export default function TechWeUse() {
  return (
    <StyledTechWeUseSection>
      {/*  */}
      <div className="container">
        <div className="toggle-box">
          <Text text="FrontEnd Technologies" fontSize="2.4rem" />
        </div>
        <div className="slider">
          <Slider
            smooth
            totalSlides={11}
            srcKey="fend"
            imageformat="svg"
            size={50}
            sliderWidth="60vw"
          />
        </div>
      </div>
      {/*  */}
      <div className="container">
        <div className="toggle-box">
          <Text text="FrontEnd Technologies" fontSize="2.4rem" />
        </div>
        <div className="slider">
          <Slider
            smooth
            totalSlides={11}
            srcKey="fend"
            imageformat="svg"
            size={50}
            sliderWidth="60vw"
          />
        </div>
      </div>
      {/*  */}
      <div className="container">
        <div className="toggle-box">
          <Text text="FrontEnd Technologies" fontSize="2.4rem" />
        </div>
        <div className="slider">
          <Slider
            smooth
            totalSlides={11}
            srcKey="fend"
            imageformat="svg"
            size={50}
            sliderWidth="60vw"
          />
        </div>
      </div>
    </StyledTechWeUseSection>
  );
}
