import styled, { keyframes } from "styled-components";
// import { AnimatedTitle } from "../Animations/TitleAnimation";
const AnimatedTitle = keyframes`
  0% {
    color: transparent;
  }

  50% {
    color: black;
  }
  100% {
    color: transparent;
  }
`;

const StyledTitle = styled.h1`
  font-size: 7.2rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.8;
  font-family: sans-serif;
  font-weight: 900;
  letter-spacing: -2px;
  font-family: serif;
  & span {
    display: block;
    background-image: linear-gradient(
      40deg,
      ${({ theme }) => theme.color.primary},
      ${({ theme }) => theme.color.secondary}
    );

    -webkit-background-clip: text;
    color: transparent;
  }

  & > .span-1 {
    animation: 6s ease-in 2s infinite ${AnimatedTitle};
  }
  & > .span-2 {
    animation: 4s ease-in 4s infinite ${AnimatedTitle};
  }
  & > .span-3 {
    animation: 6s ease-in 6s infinite ${AnimatedTitle};
  }
`;
export default StyledTitle;
