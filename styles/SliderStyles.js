import styled, { keyframes } from "styled-components";

const AnimatedSlider = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100px * 12));
  }
`;

// const AnimatedSliderFunction = function (slidenum = 16, imageSize = 100) {
//   let AnimatedSlider = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(${-imageSize * (slidenum - 4)}px );
//   }
// `;

//   return AnimatedSlider;
// };
export const StyledSlider = styled.div`
  width: ${(props) => props.sliderWidth || "80vw"};
  display: flex;
  overflow: hidden;
  gap: 4rem;
  padding: 2rem;

  & .slide {
    margin-right: 10px;
    animation: 32s linear 0s infinite ${AnimatedSlider};
    animation-direction: alternate;
  }
`;
