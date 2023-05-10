import styled from "styled-components";
import { devices } from "./Global";
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) minmax(min-content 3fr) min-content;
  align-items: center;
  justify-items: center;

  & .hidden {
    opacity: 0;
    transform: translateX(200%);
    transition: all 0.5s ease-out;
  }

  & .show {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease-out;
  }
  @media only screen and ${devices.lg} {
    & .logo {
      justify-self: start;
      padding: 2rem;
    }
  }
`;
