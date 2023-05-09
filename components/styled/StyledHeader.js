import styled from "styled-components";
import { devices } from "./Global";
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) minmax(min-content 3fr) min-content;
  align-items: center;
  justify-items: center;

  @media only screen and ${devices.lg} {
  }
`;
